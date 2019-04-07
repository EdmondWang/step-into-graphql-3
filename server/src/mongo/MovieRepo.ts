import { Movie } from '../models/Movie';
import { BaseRepo } from './BaseRepo';

export default class MovieRepo extends BaseRepo<Movie> {

    public countMovies(): Promise<number> {
        return this.collection.count({});
    }

}
