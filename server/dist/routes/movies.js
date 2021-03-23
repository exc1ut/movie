"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("../utils/axios"));
var router = express_1.default.Router();
var encodeQuery = function (query) {
    var encodedQuery = Object.keys(query)
        .map(function (item) {
        return item + "=" + query[item];
    })
        .join("&");
    return encodedQuery;
};
/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents
*/
router.get("/contents", function (req, res) {
    console.log(req.query);
    var query = "?" +
        Object.keys(req.query)
            .map(function (key) {
            return key + "=" + req.query[key];
        })
            .join("&");
    console.log("query" + encodeURI(query));
    axios_1.default.get("/contents" + query).then(function (result) {
        console.log("result: " + result.data);
        res.status(200).json(result.data.data);
    });
});
/*
  Get all recent news
  Public
  @type: Get
  @route: /movies/contents/genres
*/
router.get("/contents/genres", function (req, res) {
    var query = req.query;
    var encodedQuery = encodeQuery(query);
    axios_1.default
        .get("/contents/genres?" + encodedQuery)
        .then(function (result) {
        // res.status(200).json(result.data);
        return Array.from(result.data.data);
    })
        .then(function (data) {
        data.sort(function (a, b) {
            // @ts-ignore
            if (a.id > b.id) {
                return 1;
                // @ts-ignore
            }
            else if (a.id < b.id) {
                return -1;
            }
            return 0;
        });
        return res.status(200).json(data);
    });
});
exports.default = router;
//# sourceMappingURL=movies.js.map