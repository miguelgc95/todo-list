"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { NODE_ENV = 'development', MONGO_DB_URL_PRODUCTION, MONGO_DB_URL_DEVELOPMENT, PORT, } = process.env;
const baseConfig = {
    app: {
        port: PORT || '3006',
    },
    client: {
        url: process.env.CLIENT_URL || 'http://localhost:3006',
    },
};
const config = {
    development: {
        ...baseConfig,
        db: {
            // url: MONGO_DB_URL_DEVELOPMENT || 'problem with database',
            url: MONGO_DB_URL_DEVELOPMENT ||
                'mongodb://localhost:27017/tasksManagerDev',
        },
    },
    production: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_PRODUCTION || 'problem with database',
        },
    },
};
exports.default = config[NODE_ENV];
