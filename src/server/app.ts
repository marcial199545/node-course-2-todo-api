import express from "express";
import path from "path";
import expHB from "express-handlebars";
import morgan from "morgan";
import indexRoutes from "../routes/index";
import todoRoutes from "../routes/todo";
import bodyParser = require("body-parser");
class Application {
    // NOTE setting the type of app
    app: express.Application;
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", 3000);
        this.app.set("views", path.join(__dirname, "views"));
        this.app.engine(
            "hbs",
            expHB({
                layoutsDir: path.join(this.app.get("views"), "layouts"),
                partialsDir: path.join(this.app.get("views"), "partials"),
                defaultLayout: "main",
                extname: ".hbs"
            })
        );
        this.app.set("view engine", ".hbs");
    }
    routes() {
        this.app.use(indexRoutes);
        this.app.use(todoRoutes);
        this.app.use(express.static(path.join(__dirname, "public")));
    }
    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`connected to local port §§ ${this.app.get("port")} §§`);
        });
    }
}
export default Application;
