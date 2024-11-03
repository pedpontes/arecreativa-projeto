import { getActivitiesByIdRepository } from "../repositories/activitiesRepository/getActivitiesByIdRepository";
import { changeStatusActivitiesRepository } from "../repositories/activitiesRepository/changeStatusActivityRepository";


const changeStatusActivitiesController = async (id: number) => {
    
    const activity = await getActivitiesByIdRepository(id);
    if(!activity){
        throw {status: 404, message: "Activity not found"};
    }
    await changeStatusActivitiesRepository(activity);
};

export default changeStatusActivitiesController;