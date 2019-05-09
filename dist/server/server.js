"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE third party modules
const app_1 = __importDefault(require("./app"));
// NOTE Locals
const mongoose_1 = require("./db/mongoose");
mongoose_1.connect();
const app = new app_1.default();
app.start();
exports.default = app;
