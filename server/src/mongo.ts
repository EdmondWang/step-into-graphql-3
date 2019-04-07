
import { MongoClient } from 'mongodb';

const DATABASE_NAME = 'mydb';
const USER_NAME = 'edmond';
const PWD = '12345678';
const URL = `mongodb://${USER_NAME}:${PWD}localhost:27017/${DATABASE_NAME}`;

const setupConnection = async () => {
    console.log('Setting up connection to mongo');
    const client = new MongoClient(URL, {useNewUrlParser: true});
    let db = null;
    try {
        await client.connect();
        db = client.db(DATABASE_NAME);
    } catch (err) {
        console.log(err.stack);
        throw err;
    }
    return db;
};

export default setupConnection();
