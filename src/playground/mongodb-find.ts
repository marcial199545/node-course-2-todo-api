import * as mongo from "mongodb";
import { log } from "util";
const { MongoClient, ObjectId } = mongo;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err: mongo.MongoError, client: mongo.MongoClient) => {
    if (err) {
        console.log(err);
        return console.log(`Unable to connect to the MonogDB server`);
    }
    console.log(`Connected to MongoDB server`);
    const db = client.db(`TodoApp`);
    // NOTE count() implementation
    // db.collection("Todos")
    //     .find({})
    //     .count()
    //     .then(
    //         count => {
    //             console.log(`Todos count => ${count}`);
    //         },
    //         err => {
    //             console.log("Unable to fetch Todos => ", err);
    //         }
    //     );
    // NOTE toArray() implementation
    // db.collection("Todos")
    //     .find({ _id: new ObjectId("5cc9f363c70e02f6c39ecd4a") })
    //     .toArray()
    //     .then(
    //         docs => {
    //             console.log("TCL: todos => ");
    //             console.log(JSON.stringify(docs, undefined, 2));
    //         },
    //         err => {
    //             console.log("TCL: err", err);
    //         }
    //     );

    // NOTE fetching Users
    db.collection("Users")
        .find({ name: "Marcial" })
        .toArray()
        .then(
            users => {
                console.log(`TCL: users =>  ${JSON.stringify(users, undefined, 2)}`);
            },
            err => {
                console.log("Unable to fetch users => ", err);
            }
        );
    // client.close();
});
