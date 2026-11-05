import {initMongoDB} from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootStrap = async () => {
    await initMongoDB();
    startServer();
};

bootStrap();
