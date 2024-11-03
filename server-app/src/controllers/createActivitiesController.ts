import { createActivitiesRepository } from "../repositories/activitiesRepository/createActivitiesRepository";
import { IActivitiesData } from "../lib/IActivities";

const createActivitiesController = async (activity: IActivitiesData) => {    
    const newActivity = await createActivitiesRepository(activity);

    return newActivity;
};

export default createActivitiesController;