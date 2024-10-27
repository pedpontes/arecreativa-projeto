import { Request, Response } from 'express';
import { getActivitiesRepository } from '../repositories/activitiesRepository';
import { Activities } from '@prisma/client';

export const listActivitiesController = async (req: Request) => {
    try {
        const activities: Activities[] = await getActivitiesRepository();
        return activities;

    } catch (error: any) {
        throw {status: error.status, message: error.message};
    }
};