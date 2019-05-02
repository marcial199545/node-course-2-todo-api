import * as mongo from "mongodb";
import { log } from "util";
const { MongoClient, ObjectId } = mongo;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err: mongo.MongoError, client: mongo.MongoClient) => {
    if (err) {
        console.log(err);
        return console.log(`Unable to connect to the MonogDB server`);
    }
    console.log(`connected to MognoDb`);
    const db = client.db("TodoApp");
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
        .then(
            result => {
                console.log("TCL: result", result.value);
            },
            err => {
                console.log("TCL: err", err);
            }
        );
});
