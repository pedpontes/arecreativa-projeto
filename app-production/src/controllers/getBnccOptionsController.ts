import { BNCC } from "../lib/IActivitiesData";
import { getBNCCOptionsRepository } from "../repositories/activitiesRepository";



export const getBnccOptionsController = async (): Promise<BNCC[]> => {
    const bnccOptions = await getBNCCOptionsRepository();
    return bnccOptions;
};

