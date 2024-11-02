import { editActivitiesRepository } from '../repositories/activitiesRepository/editActivitiesRepository';
import { IActivitiesData } from '../lib/IActivitiesData';

const editActivitiesController = async (id: number, activity: IActivitiesData) => {

    await editActivitiesRepository(id, activity);
    return;
};

export default editActivitiesController;