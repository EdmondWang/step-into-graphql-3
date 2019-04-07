import { Movie } from 'src/models/Movie';
import MongoConn from '../../mongo/Connection';
import MovieRepo from '../../mongo/MovieRepo';

export default {
    Query: {
        movies: async (): Promise<Movie[]> => {
            const db = await MongoConn.getConn();
            const movieRepo = new MovieRepo(db, 'movie');
            return movieRepo.find();
        }
    }
};
