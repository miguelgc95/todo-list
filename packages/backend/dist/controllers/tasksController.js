"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.postNewTask = exports.getAllTasks = void 0;
const tasks_1 = __importDefault(require("../models/tasks"));
async function getAllTasks(req, res) {
    try {
        const allTasks = await tasks_1.default.find();
        res.json(allTasks);
    }
    catch (error) {
        res.json(error);
    }
}
exports.getAllTasks = getAllTasks;
async function postNewTask(req, res) {
    try {
        const postNewTaskObject = new tasks_1.default(req.body);
        const result = await postNewTaskObject.save();
        res.status(200).json(result);
    }
    catch (error) {
        res.json(error);
    }
}
exports.postNewTask = postNewTask;
async function deleteTask(req, res) {
    try {
        const result = tasks_1.default.find(req.params).remove().exec();
        res.status(200).json(result);
    }
    catch (error) {
        res.json(error);
    }
}
exports.deleteTask = deleteTask;
