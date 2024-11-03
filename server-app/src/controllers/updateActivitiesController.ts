import { editActivitiesRepository } from '../repositories/activitiesRepository/updateActivitiesRepository';
import { IActivitiesData } from '../lib/IActivities';

const editActivitiesController = async (id: number, activity: IActivitiesData) => {

    await editActivitiesRepository(id, activity);
    return;
};

export default editActivitiesController;