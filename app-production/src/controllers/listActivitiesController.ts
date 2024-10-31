import { Request } from 'express';
import { getActivitiesRepository } from '../repositories/activitiesRepository';

export const listActivitiesController = async (req: Request) => {

    const activities = await getActivitiesRepository();
    return activities;

};