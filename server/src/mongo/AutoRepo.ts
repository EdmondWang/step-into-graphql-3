import { Auto } from '../models/Auto';
import { BaseRepo } from './BaseRepo';

export default class AutoRepo extends BaseRepo<Auto> {

    public countAutos(): Promise<number> {
        return this.collection.count({});
    }

}
