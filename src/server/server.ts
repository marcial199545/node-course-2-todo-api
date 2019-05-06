import * as mongoose from "mongoose";
(<any>mongoose).Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");
