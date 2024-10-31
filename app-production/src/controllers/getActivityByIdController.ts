import { getActivitiesByIdRepository } from "../repositories/activitiesRepository";
import { Request } from "express";


export const getActivityByIdController = async (req: Request) => {
    const { id } = req.params;

    const activity = await getActivitiesByIdRepository(Number(id));
    if(!activity) {
        throw {status: 404, message: "Activity not found"};
    }
    return activity;
};