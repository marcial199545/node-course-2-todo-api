import * as mongo from "mongodb";
const { MongoClient, ObjectId } = mongo;
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err: mongo.MongoError, client: mongo.MongoClient) => {
    if (err) {
        console.log(err);
        return console.log(`Unable to connect to the MonogDB server`);
    }
    console.log(`connected to MognoDb`);
    const db = client.db("TodoApp");
    // NOTE deleteOne() implementation
    db.collection("Todos")
        .deleteOne({ text: "eat lunch" })
        .then(
            result => {
                console.log(result.result);
            },
            err => {
                console.log("TCL: err", err);
            }
        );

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
});
