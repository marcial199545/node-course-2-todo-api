"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("../routes/index"));
var todo_1 = __importDefault(require("../routes/todo"));
var bodyParser = require("body-parser");
var Application = /** @class */ (function () {
    function Application() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    Application.prototype.settings = function () {
        this.app.set("port", 3000);
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.engine("hbs", express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs"
        }));
        this.app.set("view engine", ".hbs");
    };
    Application.prototype.routes = function () {
        this.app.use(index_1.default);
        this.app.use(todo_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    };
    Application.prototype.middlewares = function () {
        this.app.use(bodyParser.json());
        this.app.use(morgan_1.default("dev"));
    };
    Application.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("connected to local port \u00A7\u00A7 " + _this.app.get("port") + " \u00A7\u00A7");
        });
    };
    return Application;
}());
exports.default = Application;
