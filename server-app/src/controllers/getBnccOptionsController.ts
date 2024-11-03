import { BNCC } from "../lib/IActivitiesData";
import { getBNCCOptionsRepository } from "../repositories/activitiesRepository/getAllBnccOptionsRepository";



const getBnccOptionsController = async (): Promise<BNCC[]> => {
    const bnccOptions = await getBNCCOptionsRepository();
    return bnccOptions;
};

export default getBnccOptionsController;