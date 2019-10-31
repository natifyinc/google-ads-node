"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = __importDefault(require("grpc"));
const client_1 = require("./client");
const enums_1 = require("./enums");
const types_1 = require("./types");
const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_ID";
const DEVELOPER_TOKEN = "DEVELOPER_TOKEN";
const LOGIN_CUSTOMER_ID = "LOGIN_CUSTOMER_ID";
test("new client with access token", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    expect(client).toBeInstanceOf(client_1.GoogleAdsClient);
});
test("new client with refresh token", () => {
    const client = new client_1.GoogleAdsClient({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        developer_token: DEVELOPER_TOKEN,
    });
    expect(client).toBeInstanceOf(client_1.GoogleAdsClient);
});
test("new client fails when missing developer token", () => {
    expect(() => {
        // @ts-ignore
        const client = new client_1.GoogleAdsClient({
            access_token: ACCESS_TOKEN,
        });
    }).toThrow("Missing required");
});
test("new client fails when not using valid options interface", () => {
    expect(() => {
        // @ts-ignore
        const client = new client_1.GoogleAdsClient({
            client_id: CLIENT_ID,
            refresh_token: REFRESH_TOKEN,
            developer_token: DEVELOPER_TOKEN,
        });
    }).toThrow("Missing required keys");
});
test("new client from config", () => {
    const client = new client_1.GoogleAdsClient();
    expect(client).toBeInstanceOf(client_1.GoogleAdsClient);
});
test("new client from config with path", () => {
    const client = new client_1.GoogleAdsClient("./googleads.config.js");
    expect(client).toBeInstanceOf(client_1.GoogleAdsClient);
});
test("new client fails when config file does not exist", () => {
    expect(() => {
        // @ts-ignore
        const client = new client_1.GoogleAdsClient("./notfound.config.js");
    }).toThrow();
});
test("loading api services", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: "123",
        developer_token: "123",
    });
    expect(() => client.getService("NonExistentService")).toThrowError();
    expect(() => client.getService("GoogleAdssService")).toThrowError();
    const service = client.getService("GoogleAdsService");
    expect(service).toBeInstanceOf(grpc_1.default.Client);
});
test("correctly builds a grpc resource from an object", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const campaign = {
        name: "Interplanetary Flights",
        advertising_channel_type: enums_1.AdvertisingChannelType.SEARCH,
        status: enums_1.CampaignStatus.PAUSED,
        bidding_strategy_type: enums_1.BiddingStrategyType.MANUAL_CPC,
        campaign_budget: "resources/123/campaignBudgets/321",
        manual_cpc: {
            enhanced_cpc_enabled: true,
        },
    };
    const protobuf = client.buildResource("Campaign", campaign);
    expect(protobuf instanceof types_1.Campaign);
    expect(protobuf.getName().toObject().value).toEqual("Interplanetary Flights");
    expect(protobuf.getStatus()).toEqual(3);
    expect(protobuf.getManualCpc().toObject()).toEqual({
        enhancedCpcEnabled: { value: true },
    });
});
test("correctly builds a complex and deeply nested grpc resource", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const ad = {
        ad_group: "customers/123/adGroups/321",
        status: 3,
        ad: {
            final_urls: ["http://www.example.com"],
            type: 3,
            name: "best ad ever",
            expanded_text_ad: {
                headline_part1: "Cruise to Mars #%d",
                headline_part2: "Best Space Cruise Line",
                description: "Buy your tickets now!",
                path1: "all-inclusive",
                path2: "deals"
            },
            url_custom_parameters: [
                { key: "season", value: "easter123" },
                { key: "promocode", value: "nj123" }
            ]
        }
    };
    const protobuf = client.buildResource("AdGroupAd", ad);
    expect(protobuf instanceof types_1.AdGroupAd);
    expect(protobuf.toObject()).toEqual(expect.objectContaining({
        status: 3,
        adGroup: { value: "customers/123/adGroups/321" },
        ad: expect.objectContaining({
            finalUrlsList: [{ value: "http://www.example.com" }],
            type: 3,
            name: { value: "best ad ever" },
            expandedTextAd: expect.objectContaining({
                headlinePart1: { value: "Cruise to Mars #%d" },
                headlinePart2: { value: "Best Space Cruise Line" },
                description: { value: "Buy your tickets now!" },
                path1: { value: "all-inclusive" },
                path2: { value: "deals" },
            }),
            urlCustomParametersList: [
                { key: { value: "season" }, value: { value: "easter123" } },
                { key: { value: "promocode" }, value: { value: "nj123" } },
            ],
        }),
    }));
});
test("correctly builds a grpc request from an object", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const suggestGeoTargetConstantsRequest = {
        locale: "gb",
        country_code: "GB",
        location_names: {
            names: ["location1", "location2"],
        },
    };
    const protobuf = client.buildResource("SuggestGeoTargetConstantsRequest", suggestGeoTargetConstantsRequest);
    expect(protobuf instanceof types_1.SuggestGeoTargetConstantsRequest);
    expect(protobuf.getCountryCode().toObject().value).toEqual("GB");
    expect(protobuf.toObject()).toEqual({
        locale: { value: "gb" },
        countryCode: { value: "GB" },
        locationNames: {
            namesList: [{ value: "location1" }, { value: "location2" }],
        },
    });
});
test("correctly builds a keyword request from an object", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const ad_group_criterion = {
        status: 2,
        keyword: {
            text: "some_keyword",
            match_type: 2,
        },
    };
    const protobuf = client.buildResource("AdGroupCriterion", ad_group_criterion);
    expect(protobuf.toObject()).toEqual(expect.objectContaining({
        status: 2,
        keyword: {
            text: {
                value: "some_keyword",
            },
            matchType: 2,
        },
    }));
});
test("correctly builds a custom interest resource from an object", () => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const custom_interest = {
        type: 3,
        name: "I like dogs",
        description: "We love dogs, dogs are the best",
        members: [{ member_type: 2, parameter: "dog" }],
    };
    const protobuf = client.buildResource("CustomInterest", custom_interest);
    expect(protobuf.toObject()).toEqual(expect.objectContaining({
        type: 3,
        name: {
            value: "I like dogs",
        },
        description: {
            value: "We love dogs, dogs are the best",
        },
        membersList: [
            {
                memberType: 2,
                parameter: { value: "dog" },
            },
        ],
    }));
});
test("throws an error when attempting to build a non-existent resource", done => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    try {
        client.buildResource("GoogleAds", {});
    }
    catch (err) {
        expect(err.message).toContain("does not exist");
        done();
    }
});
test("throws an unauthenticated error when access token is invalid", async (done) => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const service = client.getService("GoogleAdsService");
    const request = new types_1.SearchGoogleAdsRequest();
    await service.search(request).catch((err, res) => {
        expect(res).toBe(undefined);
        expect(err.message).toContain("16 UNAUTHENTICATED");
        done();
    });
});
test("supports using callbacks instead of async service calls", done => {
    const client = new client_1.GoogleAdsClient({
        access_token: ACCESS_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        login_customer_id: LOGIN_CUSTOMER_ID,
    });
    const service = client.getService("GoogleAdsService");
    const request = new types_1.SearchGoogleAdsRequest();
    service.search(request, (err, res) => {
        expect(res).toBe(undefined);
        expect(err.message).toContain("16 UNAUTHENTICATED");
        done();
    });
});
test("supports usage of an async access token getter function", async () => {
    expect.assertions(6);
    let tokenGetterCalled = "";
    async function accessTokenGetter(clientId, clientSecret, refreshToken) {
        tokenGetterCalled = await new Promise(resolve => setTimeout(() => resolve("<access-token>"), 1000));
        expect(clientId).toEqual(CLIENT_ID);
        expect(clientSecret).toEqual(CLIENT_SECRET);
        expect(refreshToken).toEqual(REFRESH_TOKEN);
        return "<access-token>";
    }
    const client = new client_1.GoogleAdsClient({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        developer_token: DEVELOPER_TOKEN,
        accessTokenGetter,
    });
    /* Do a service request so the accessTokenGetter is called */
    const service = client.getService("GoogleAdsService");
    const request = new types_1.SearchGoogleAdsRequest();
    await expect(service.search(request)).rejects.toThrow();
    expect(client).toBeInstanceOf(client_1.GoogleAdsClient);
    expect(tokenGetterCalled).toEqual("<access-token>");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2NsaWVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLHFDQUEyQztBQUMzQyxtQ0FBc0Y7QUFDdEYsbUNBUWlCO0FBRWpCLE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNwQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDdEMsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzlCLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQztBQUNsQyxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUMxQyxNQUFNLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDO0FBRTlDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7SUFDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBZSxDQUFDO1FBQ2pDLFlBQVksRUFBRSxZQUFZO1FBQzFCLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtLQUNyQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLHdCQUFlLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQywrQkFBK0IsRUFBRSxHQUFHLEVBQUU7SUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBZSxDQUFDO1FBQ2pDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGVBQWUsRUFBRSxlQUFlO0tBQ2pDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsd0JBQWUsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLCtDQUErQyxFQUFFLEdBQUcsRUFBRTtJQUN6RCxNQUFN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