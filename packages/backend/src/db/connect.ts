import mongoose from 'mongoose';

import config from '../config';

function connect() {
    return mongoose.connect(config.db.url);
}

export default connect;
