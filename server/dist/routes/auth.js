"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
var express_1 = require("express");
var user_1 = __importDefault(require("../models/user"));
var router = express_1.Router();
router.post("/register", function (req, res) {
    var user = req.body;
    var model = new user_1.default(user);
    res.json({ response: "success" });
});
exports.AuthRouter = router;
//# sourceMappingURL=auth.js.map