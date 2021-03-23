"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var movies_1 = __importDefault(require("./routes/movies"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var auth_1 = require("./routes/auth");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
//Loading configs to process.env
dotenv_1.config();
//Initializing the app
var app = express_1.default();
//Constants
var port = process.env.PORT || 9000;
// DB connection
mongoose_1.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//Middlewares
app.use(morgan_1.default("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
//Routes
app.use("/movies", movies_1.default);
app.use("/auth", auth_1.AuthRouter);
//Serving static files
app.use(express_1.default.static("../client/build"));
app.get("*", function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, "../", "client", "build", "index.html"));
});
//Error handlers
app.use(function (req, res, next) {
    var error = new Error("Not Found");
    next(error);
});
// app.use((req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });
app.listen(port, function () {
    return console.log("This application was started: http://localhost:" + port);
});
//# sourceMappingURL=server.js.map