// NOTE third party modules
import App from "./app";
import bodyParser from "body-parser";
// NOTE Locals
import mongoose, { connect } from "./db/mongoose";
import User from "./models/User";
import Todo from "./models/Todo";

connect();
const app = new App();
app.start();
export default app;
