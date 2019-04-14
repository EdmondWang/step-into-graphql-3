import { Auto } from '../../models/Auto';
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
    },
    Mutation: {
        addAuto: async (make: string): Promise<Auto> => {

            const auto = new Auto();
            auto.make = make;
            // auto.model = model;
            // auto.year = year;

            try {
                const result = await autoRepo.create(auto);
                return result && auto;
            } catch (e) {
                throw e;
            }

        }
    }
};
