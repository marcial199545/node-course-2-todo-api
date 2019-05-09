"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("mongodb");
const router = express_1.Router();
const Todo_1 = __importDefault(require("../server/models/Todo"));
router
    .route("/todos/:id")
    .get((req, res) => {
    const { id } = req.params;
    if (!mongodb_1.ObjectID.isValid(id)) {
        console.log("TLC: Error §§§§> ID is not valid");
        return res.status(404).render("errorPage", { err: "ID is not valid" });
    }
    Todo_1.default.findById(id)
        .then(todo => {
        if (!todo) {
            console.log("TLC: Error §§§§> ID not found");
            return res.status(404).render("errorPage", { err: "ID not found" });
        }
        res.send({ todo });
    })
        .catch(err => {
        res.status(400).send({});
    });
})
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    let todo = new Todo_1.default({
        text: req.body.text
    });
    todo.save().then(result => {
        res.send(result);
    }, err => {
        res.status(400).send(err.message);
    });
    console.log(req.body);
}));
exports.default = router;
