"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../server/db/mongoose");
const mongodb_1 = require("mongodb");
const User_1 = __importDefault(require("./../server/models/User"));
let id = "5cd11d7302b05f5025c6a21b4";
let userId = "5cd08c373d88f327e4f8f312";
mongoose_1.connect();
// NOTE validating ObjectId
// if (!ObjectID.isValid(id)) {
//     console.log("Todo ID not valid");
// }
if (!mongodb_1.ObjectID.isValid(userId)) {
    console.log("User ID not valid");
}
// // NOTE find and return all the Todos that match the query
// Todo.find({ _id: id })
//     .then(todos => {
//         if (todos.length == 0) {
//             return console.log("TCL: Error=> Id not found");
//         }
//         console.log("TCL: Todos=>", todos);
//     })
//     .catch(err => {
//         console.log("TCL: Error ===>", err.message);
//     });
// // // NOTE find and return the first Todo that matches the query
// Todo.findOne({ _id: id })
//     .then(todos => {
//         if (!todos) {
//             return console.log("TCL: Error=> Id not found");
//         }
//         console.log("TCL: Todo=>", todos);
//     })
//     .catch(err => console.log("TCL: Error ===>", err.message));
// // NOTE find by id and return the Todo that matches the query
// Todo.findById(id)
//     .then(todos => {
//         if (!todos) {
//             return console.log("TCL: Error=> Id not found");
//         }
//         console.log("TCL: TodoId=>", todos);
//     })
//     .catch(err => console.log("TCL: Error ===>", err.message));
// SECTION challenge querying users
User_1.default.find({ _id: userId })
    .then(todos => {
    if (todos.length == 0) {
        return console.log("TCL: Error §§§§> ID does not exist");
    }
    console.log("TCL: todos ==>", todos);
})
    .catch(err => {
    console.log("TCL: Error §§§§> ", err.message);
});
User_1.default.findOne({ _id: userId })
    .then(todo => {
    if (!todo) {
        return console.log("TCL: Error §§§§> ID does not exist");
    }
    console.log("TCL: todos ==>", todo);
})
    .catch(err => {
    console.log("TCL: Error §§§§> ", err.message);
});
User_1.default.findById(userId)
    .then(todo => {
    if (!todo) {
        return console.log("TCL: Error §§§§> ID does not exist");
    }
    console.log("TCL: todos ==>", todo);
})
    .catch(err => {
    console.log("TCL: Error §§§§> ", err.message);
});
