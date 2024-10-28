import { Request, Response } from 'express';
import { getActivitiesByIdRepository } from '../repositories/activitiesRepository';
import { deleteActivitiesRepository } from '../repositories/activitiesRepository';

export const deleteActivitiesController = async (req: Request) => {
    const { id } = req.params;
    try {
        const existActivity = await getActivitiesByIdRepository(Number(id));
        if(!existActivity){
            throw {status: 404, message: "Activity not found"};
        }
        
        await deleteActivitiesRepository(Number(id));
    } catch (error: any) {
        throw {status: error.status, message: error.message};
    }
};