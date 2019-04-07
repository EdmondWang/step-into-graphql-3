import { Collection, Db, InsertOneWriteOpResult, MongoClient } from 'mongodb';
import {IRead} from './interfaces/IRead';
import {IWrite} from './interfaces/IWrite';

export abstract class BaseRepo<T> implements IRead<T>, IWrite<T> {

    public readonly collection: Collection;

    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    public async find(): Promise<T[]> {
         const result = await this.collection.find().toArray();
         return result;
    }
    public findOne(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
    public async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this.collection.insert(item);
        return !!result.result.ok;
    }
    public update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    public delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
