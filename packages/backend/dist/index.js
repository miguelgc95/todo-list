"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./db"));
if (!config_1.default.app.port) {
    throw new Error('App config is invalid');
}
(0, db_1.default)().then(() => {
    server_1.default.listen(config_1.default.app.port, () => {
        console.log(`INIT SERVER ON PORT ${config_1.default.app.port} :)`);
    });
});
