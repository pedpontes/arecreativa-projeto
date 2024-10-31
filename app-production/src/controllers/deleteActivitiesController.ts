import { Request } from 'express';
import { deleteActivitiesRepository } from '../repositories/activitiesRepository';

export const deleteActivitiesController = async (req: Request) => {
    const { id } = req.params;
    try {
        await deleteActivitiesRepository(parseInt(id));
    } catch (error: any) {
        throw {status: error.status, message: error.message};
    }
};