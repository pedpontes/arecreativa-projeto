import { getActivitiesByIdRepository } from "../repositories/activitiesRepository/getActivitiesByIdRepository";

const getActivityByIdController = async (id: number) => {

    const activity = await getActivitiesByIdRepository(id);
    return activity;
};

export default getActivityByIdController