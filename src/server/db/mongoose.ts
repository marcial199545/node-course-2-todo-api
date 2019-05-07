import mongoose from "mongoose";
import { log } from "util";

mongoose.Promise = global.Promise;

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });
        console.log("connected to Database §§ Mongo §§ ");
    } catch {
        console.log("An error occuried when trying to connect to the DataBase");
    }
}
export default mongoose;
