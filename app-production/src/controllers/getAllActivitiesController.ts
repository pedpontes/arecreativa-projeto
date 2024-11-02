import { getActivitiesRepository } from '../repositories/activitiesRepository/getAllActivitiesRepository';

const getAllActivitiesController = async () => {

    const activities = await getActivitiesRepository();
    return activities;

};

export default getAllActivitiesController;