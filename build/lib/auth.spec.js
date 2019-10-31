"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
function newAuth() {
    return new auth_1.default({
        clientId: "abc123",
        clientSecret: "abc123",
        refreshToken: "abc123",
    });
}
test("new auth client", () => {
    const auth = newAuth();
    expect(auth).toBeInstanceOf(auth_1.default);
});
test("fails when refreshing with invalid refresh token", async () => {
    const auth = newAuth();
    await expect(auth.getAccessToken()).rejects.toThrow("Failed to refresh access token");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9hdXRoLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsU0FBUyxPQUFPO0lBQ2QsT0FBTyxJQUFJLGNBQUksQ0FBQztRQUNkLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFlBQVksRUFBRSxRQUFRO0tBQ3ZCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQzNCLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDbEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDdkIsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ3hGLENBQUMsQ0FBQyxDQUFDIn0=