import {IRead} from './interfaces/IRead';
import {IWrite} from './interfaces/IWrite';
import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

export abstract class BaseRepo<T> implements IRead<T>, IWrite<T> {
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
