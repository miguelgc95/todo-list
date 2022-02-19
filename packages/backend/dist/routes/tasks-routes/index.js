"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksController_1 = require("../../controllers/tasksController");
const tasksRouter = express_1.default.Router();
tasksRouter.get('/', tasksController_1.getAllTasks);
tasksRouter.post('/postNewTask', tasksController_1.postNewTask);
tasksRouter.delete('/deleteTask/:_id', tasksController_1.deleteTask);
exports.default = tasksRouter;
