"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getuserInfo = function (userName, callback) {
        var options = {
            headers: {
                "User-Agent": "request"
            },
            json: true
        };
        request.get("https://api.github.com/users/" + userName, options, function (error, response, body) {
            //console.log(response);
            //console.log(error);
            //console.log(body);
            var user = new User_1.User(body);
            //console.log(user);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function () { };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
