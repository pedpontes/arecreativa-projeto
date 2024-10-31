import { Request } from 'express';
import { deleteActivitiesRepository } from '../repositories/activitiesRepository';

export const deleteActivitiesController = async (req: Request) => {
    const { id } = req.params;

    await deleteActivitiesRepository(parseInt(id));
    return;
};