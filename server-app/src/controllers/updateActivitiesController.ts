import { editActivitiesRepository } from '../repositories/activitiesRepository/updateActivitiesRepository';
import { IActivitiesFormSubmit } from '../lib/IActivities';

const editActivitiesController = async (id: number, activity: IActivitiesFormSubmit) => {

    await editActivitiesRepository(id, activity);
    return;
};

export default editActivitiesController;