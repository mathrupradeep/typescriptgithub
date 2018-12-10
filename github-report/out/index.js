"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var srv = new GithubApiService_1.GithubApiService();
srv.getuserInfo("koushikkothagal", function (user) {
    console.log(user);
});
