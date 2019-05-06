"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongo = __importStar(require("mongodb"));
var MongoClient = mongo.MongoClient, ObjectId = mongo.ObjectId;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, function (err, client) {
    if (err) {
        console.log(err);
        return console.log("Unable to connect to the MonogDB server");
    }
    console.log("Connected to MongoDB server");
    var db = client.db("TodoApp");
    // db.collection("Todos").insertOne(
    //     {
    //         text: "something to do",
    //         completed: false
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Unable to insert Todo", err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // );
    // Insert new doc into the users collection(name,age,location)
    // db.collection("users").insertOne(
    //     {
    //         name: "Marcial",
    //         age: 23,
    //         location: "Tijuana"
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Unable to insert Todo", err);
    //         }
    //         console.log(`resulting array => `, JSON.stringify(result.ops, undefined, 2));
    //         console.log(`resulting ObjectId =>`, result.ops[0]._id);
    //         console.log(`resulting ObjectId Timestamp => `, result.ops[0]._id.getTimestamp());
    //     }
    // );
    client.close();
});
