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
    console.log("connected to MognoDb");
    var db = client.db("TodoApp");
    // NOTE deleteOne() implementation
    // db.collection("Todos")
    //     .deleteOne({ text: "eat lunch" })
    //     .then(
    //         result => {
    //             console.log(result.result);
    //         },
    //         err => {
    //             console.log("TCL: err", err);
    //         }
    //     );
    // NOTE deleteMany() implementation
    // db.collection("Todos")
    //     .deleteOne({ text: "eat lunch" })
    //     .then(
    //         result => {
    //             console.log(result.result);
    //         },
    //         err => {
    //             console.log("TCL: err", err);
    //         }
    //     );
    // NOTE findOneAndDelete() implementation
    // db.collection("Todos")
    //     .findOneAndDelete({ completed: false })
    //     .then(
    //         result => {
    //             console.log(result.value);
    //         },
    //         err => {
    //             console.log("TCL: err", err);
    //         }
    //     );
    //NOTE the same but in users
    // db.collection("Users")
    //     .deleteMany({ name: "Marcial" })
    //     .then(
    //         result => {
    //             console.log(result.result);
    //         },
    //         err => {
    //             console.log("TCL: err", err);
    //         }
    //     );
    db.collection("Users")
        .findOneAndDelete({ _id: new ObjectId("5cc9e8f091dade2ee0aee709") })
        .then(function (result) {
        console.log("TCL: result", result.value);
    }, function (err) {
        console.log("TCL: err", err);
    });
});
