"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    name: {
        require: true,
        type: String,
    },
    done: {
        require: true,
        type: Boolean,
    },
}, { versionKey: false });
const AllTasksModel = mongoose_1.default.model('AllTask', taskSchema);
exports.default = AllTasksModel;
