import { Request, Response } from "express";
import { getActivitiesByIdRepository } from "../repositories/activitiesRepository";
import { changeStatusActivitiesRepository } from "../repositories/activitiesRepository";


export const changeStatusActivitiesController = async (req: Request) => {
    const { id } = req.params;

    const activity = await getActivitiesByIdRepository(Number(id));
    if(!activity){
        throw {status: 404, message: "Activity not found"};
    }
    await changeStatusActivitiesRepository(activity);
};