import { deleteActivitiesRepository } from '../repositories/activitiesRepository/deleteActivitiesRepository';

const deleteActivitiesController = async (id: number) => {
    await deleteActivitiesRepository(id);
};

export default deleteActivitiesController;