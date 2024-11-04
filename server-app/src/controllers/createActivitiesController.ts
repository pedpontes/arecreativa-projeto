import { createActivitiesRepository } from "../repositories/activitiesRepository/createActivitiesRepository";
import { IActivitiesFormSubmit } from "../lib/IActivities";

const createActivitiesController = async (activity: IActivitiesFormSubmit) => {    
    const newActivity = await createActivitiesRepository(activity);

    return newActivity;
};

export default createActivitiesController;