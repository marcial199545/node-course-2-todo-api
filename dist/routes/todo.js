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
const router = express_1.Router();
const Todo_1 = __importDefault(require("../server/models/Todo"));
router
    .route("/todos")
    .get((req, res) => {
    Todo_1.default.find()
        .then(todos => {
        res.send({ todos });
    })
        .catch(err => {
        res.status(400).send(err);
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
