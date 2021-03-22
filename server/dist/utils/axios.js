"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
exports.default = axios_1.default.create({
    baseURL: "https://api.new.mediabox.uz/v2",
    headers: {
        "Content-Type": "application/hal+json; charset=UTF-8",
        "Accesss-Control-Allow-Credentials": true,
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Access-Control-Allow-Origin": "*",
    },
});
//# sourceMappingURL=axios.js.map