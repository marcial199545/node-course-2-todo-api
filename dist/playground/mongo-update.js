"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = __importStar(require("mongodb"));
const { MongoClient, ObjectId } = mongo;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(err);
        throw new Error("can't connect to MongoDB server");
    }
    console.log("connected to MongoDB server");
    const db = client.db("TodoApp");
    // db.collection("Todos")
    //     .findOneAndUpdate({ _id: new ObjectId("5cca239cc70e02f6c39ee44e") }, { $set: { completed: true } }, { returnOriginal: false })
    //     .then(
    //         result => {
    //             console.log("TCL: result of update => ", result);
    //         },
    //         err => {
    //             console.log("TCL: Error => ", err);
    //         }
    //     );
    // NOTE updating users age and name
    db.collection("Users")
        .findOneAndUpdate({ _id: new ObjectId("5cc9ed32b0f8b61b94136070") }, { $set: { name: "Marcial" }, $inc: { age: 1 } }, { returnOriginal: false })
        .then(result => {
        console.log("TCL: result of update => ", result);
    }, err => {
        console.log("TCL: Error =>", err);
    });
});
