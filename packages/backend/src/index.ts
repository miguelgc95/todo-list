import app from './server';
import config from './config';
import connect from './db';

if (!config.app.port) {
    throw new Error('App config is invalid');
}

connect().then(() => {
    app.listen(config.app.port, () => {
        console.log(`INIT SERVER ON PORT ${config.app.port} :)`);
    });
});
