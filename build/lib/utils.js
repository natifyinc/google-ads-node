"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protobufHelpers = __importStar(require("google-protobuf/google/protobuf/field_mask_pb"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_set_1 = __importDefault(require("lodash.set"));
const lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
const structs = __importStar(require("./struct"));
// Based on https://github.com/leaves4j/grpc-promisify/blob/master/src/index.js
function promisifyServiceClient(client) {
    Object.keys(Object.getPrototypeOf(client)).forEach((functionName) => {
        if (functionName.charAt(0) === "$" || functionName.charAt(0) === "_") {
            return;
        }
        const originalFunction = client[functionName];
        client[functionName] = (request, callback) => {
            if (callback && typeof callback === "function") {
                return originalFunction.call(client, request, (error, response) => {
                    callback(error, response);
                });
            }
            return new Promise((resolve, reject) => {
                originalFunction.call(client, request, (error, response) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response);
                    }
                });
            });
        };
    });
}
exports.promisifyServiceClient = promisifyServiceClient;
function formatCallResults(resultsList, fieldMask) {
    const parsedResults = [];
    if (fieldMask) {
        const { pathsList } = fieldMask;
        for (const result of resultsList) {
            const parsedRow = parseNestedEntities(result, pathsList);
            parsedResults.push(parsedRow);
        }
    }
    else {
        for (const result of resultsList) {
            const parsedRow = parseNestedEntitiesNoPath(result);
            parsedResults.push(parsedRow);
        }
    }
    return parsedResults;
}
exports.formatCallResults = formatCallResults;
function convertToProtoFormat(data, type, resource_name, nested_path = "") {
    const pb = {};
    const struct = structs[resource_name];
    if (!struct) {
        throw new Error(`Key "${nested_path.replace(".", "")}" not found in resource "${resource_name}"`);
    }
    for (const key of Object.keys(data)) {
        const displayKey = lodash_camelcase_1.default(key);
        const value = data[key];
        /* Resource names are string values, not a protobuf string instance, so just set the string value */
        if (displayKey === "resourceName") {
            pb[displayKey] = value;
            continue;
        }
        /* Build array of proto values */
        if (Array.isArray(value)) {
            pb[displayKey] = value.map((v) => {
                return unroll(v);
            });
            continue;
        }
        pb[displayKey] = unroll(value);
        function unroll(v) {
            return typeof v === "object"
                ? convertToProtoFormat(v, type, resource_name, `${nested_path}.${key}`)
                : toProtoValueFormat(v, struct, `${nested_path}.${key}`.replace(".", ""));
        }
    }
    return pb;
}
exports.convertToProtoFormat = convertToProtoFormat;
function toProtoValueFormat(value, struct, nested_path) {
    const valueType = lodash_get_1.default(struct, nested_path);
    if (!valueType) {
        throw new Error(`Attempted to set value "${value}" on invalid path "${nested_path}" in resource`);
    }
    if (valueType.startsWith("enum_")) {
        return value;
    }
    return {
        value,
    };
}
/* This is different to lodash.camelCase as it leaves any periods (".") */
function convertPathToCamelCase(str) {
    return str.replace(/([-_][a-z])/gi, $1 => {
        return $1
            .toUpperCase()
            .replace("-", "")
            .replace("_", "");
    });
}
function parseNestedEntitiesNoPath(data, _structs = structs) {
    if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
        return data;
    }
    const findMatchingStruct = (key) => {
        const capitalcase_key = key.charAt(0).toUpperCase() + key.slice(1);
        const snakecase_key = lodash_snakecase_1.default(key);
        // We need both cases because the structs.ts file exports resources in CapitalCase,
        // but the keys inside each resource are in snake_case. parseNestedEntitiesNoPath() is
        // recursive, so we're not sure which one we'll need.
        // @ts-ignore
        return _structs[capitalcase_key] || _structs[snakecase_key];
    };
    const finalObject = {};
    Object.keys(data).map(key => {
        let displayKey = key;
        /*
          This section regarding "matching structs" is designed to correctly
          trim keys that end in "List". Some of those keys are legit (such as userList)
          while others are bogus (such as pointsList). The bogus ones need trimming so
          that the final result returned to the user matches the format specified in the docs.
    
          This adds other layer of recusive complexity to this function, and I'm open to improvements.
        */
        let matching_struct = findMatchingStruct(displayKey);
        if (!matching_struct && key.endsWith("List")) {
            // Trim "List" only if bogus key
            displayKey = key.split("List")[0];
            matching_struct = findMatchingStruct(displayKey);
        }
        const entity = data[key];
        const isObject = typeof entity === "object";
        const isUndefined = typeof entity === "undefined";
        const isArray = Array.isArray(entity);
        // It needs its "value" unwrapped if it is an object and has "value" as its only key.
        const isValue = isObject
            ? entity.hasOwnProperty("value") && Object.keys(entity).length === 1
            : false;
        if (isUndefined) {
            return;
        }
        if (isArray) {
            finalObject[displayKey] = entity.map((item) => {
                // @ts-ignore
                const parsed = parseNestedEntitiesNoPath({ item }, { item: matching_struct });
                return parsed.item;
            });
        }
        else if (isValue) {
            finalObject[displayKey] = entity.value;
        }
        else if (isObject) {
            finalObject[displayKey] = parseNestedEntitiesNoPath(entity, matching_struct);
        }
        else {
            finalObject[displayKey] = entity;
        }
    });
    return finalObject;
}
// This function first parses the data without regard for the passed props,
// then plucks out the props that it actually cares about.
function parseNestedEntities(data, props) {
    const parsed_data = parseNestedEntitiesNoPath(data);
    const final_object = {};
    for (let path of props) {
        path = convertPathToCamelCase(path);
        // Pluck resource name if available
        const path_elements_trimmed = path.split(".");
        while (path_elements_trimmed.pop()) {
            path_elements_trimmed.push("resourceName");
            const rn_path = path_elements_trimmed.join(".");
            path_elements_trimmed.pop();
            if (lodash_get_1.default(parsed_data, rn_path)) {
                lodash_set_1.default(final_object, rn_path, lodash_get_1.default(parsed_data, rn_path));
            }
        }
        // And pluck the field specified in path
        const plucked_value = lodash_get_1.default(parsed_data, path);
        if (typeof plucked_value !== "undefined") {
            lodash_set_1.default(final_object, path, plucked_value);
        }
    }
    return final_object;
}
function recursiveFieldMaskSearch(data) {
    const paths = [];
    for (const key of Object.keys(data)) {
        if (key === "resource_name") {
            continue;
        }
        const value = data[key];
        if (typeof value === "object" && !Array.isArray(value)) {
            const children = recursiveFieldMaskSearch(value);
            for (const child of children) {
                paths.push(`${key}.${child}`);
            }
            continue;
        }
        paths.push(key);
    }
    return paths;
}
function getFieldMask(data) {
    const fieldMask = new protobufHelpers.FieldMask();
    const paths = recursiveFieldMaskSearch(data);
    fieldMask.setPathsList(paths);
    return fieldMask;
}
exports.getFieldMask = getFieldMask;
function getErrorLocationPath(location) {
    if (!location || !location.hasOwnProperty("fieldPathElementsList")) {
        return "";
    }
    if (!Array.isArray(location.fieldPathElementsList) && location.fieldPathElementsList.length < 1) {
        return "";
    }
    const { fieldPathElementsList } = location;
    const paths = fieldPathElementsList.map((field) => {
        let path = field.fieldName;
        if (field.index && field.index.hasOwnProperty("value")) {
            path += `[${field.index.value}]`;
        }
        return path;
    });
    return paths.join(".");
}
exports.getErrorLocationPath = getErrorLocationPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtGQUFpRjtBQUVqRix3RUFBeUM7QUFDekMsNERBQTZCO0FBQzdCLDREQUE2QjtBQUM3Qix3RUFBeUM7QUFFekMsa0RBQW9DO0FBRXBDLCtFQUErRTtBQUMvRSxTQUFnQixzQkFBc0IsQ0FBQyxNQUFjO0lBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRTtRQUMxRSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3BFLE9BQU87U0FDUjtRQUNELE1BQU0sZ0JBQWdCLEdBQUksTUFBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRELE1BQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtZQUM5RCxJQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7Z0JBQzlDLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBYSxFQUFFLEVBQUU7b0JBQzFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxRQUFhLEVBQUUsRUFBRTtvQkFDbkUs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