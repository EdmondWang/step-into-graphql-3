
import { Db, MongoClient } from 'mongodb';

const DATABASE_NAME = 'mydb';
const USER_NAME = 'edmond';
const PWD = '12345678';
const URL = `mongodb://${USER_NAME}:${PWD}@localhost:27017/${DATABASE_NAME}`;

export default class Connection {

    public static async getConn(): Promise<Db> {
        if (this.db) {
            return Promise.resolve(this.db);
        }
        this.db = await this.establishConn();
        return this.db;
    }

    private static db: Db;

    private static async establishConn() {
        const client = new MongoClient(URL, {useNewUrlParser: true});

        try {
            await client.connect();
            return client.db(DATABASE_NAME);
        } catch (err) {
            console.log(err.stack);
            throw err;
        }
    }
}
