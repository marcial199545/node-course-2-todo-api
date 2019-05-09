"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("../routes/index"));
const todo_1 = __importDefault(require("../routes/todo"));
const bodyParser = require("body-parser");
class Application {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", 3000);
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.engine("hbs", express_handlebars_1.default({
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs"
        }));
        this.app.set("view engine", ".hbs");
    }
    routes() {
        this.app.use(index_1.default);
        this.app.use(todo_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    }
    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(morgan_1.default("dev"));
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`connected to local port §§ ${this.app.get("port")} §§`);
        });
    }
}
exports.default = Application;
