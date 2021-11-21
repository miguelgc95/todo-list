import dotenv from 'dotenv';
dotenv.config();

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
            MONGO_DB_URL_PRODUCTION: string;
            MONGO_DB_URL_DEVELOPMENT: string;
        }
    }
}

const {
    NODE_ENV = 'development',
    MONGO_DB_URL_PRODUCTION,
    MONGO_DB_URL_DEVELOPMENT,
    PORT,
} = process.env;

interface App {
    port: string;
}

interface Client {
    url: string;
}

interface DBObject {
    url: string;
}

interface baseConfig {
    app: App;
    client: Client;
}

const baseConfig: baseConfig = {
    app: {
        port: PORT || '3006',
    },
    client: {
        url: process.env.CLIENT_URL || 'http://localhost:3000',
    },
};

export interface ConfigObject {
    app: App;
    client: Client;
    db: DBObject;
}

interface GlobalConfigObject {
    development: ConfigObject;
    production: ConfigObject;
}

const config: GlobalConfigObject = {
    development: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_DEVELOPMENT || 'problem with database',
        },
    },
    production: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_PRODUCTION || 'problem with database',
        },
    },
};

export default config[NODE_ENV];
