import { Auto } from 'src/models/Auto';
import AutoRepo from '../../mongo/AutoRepo';
import MongoConn from '../../mongo/Connection';

let autoRepo: AutoRepo = null;

const init = async () => {
    const db = await MongoConn.getConn();
    autoRepo = new AutoRepo(db, 'auto');
};

init();

export default {
    Query: {
        autos: async (): Promise<Auto[]> => {
            return autoRepo.find();
        }
    }
};
