import { Request } from "express";
import { createActivitiesRepository } from "../repositories/activitiesRepository";
import { IActivitiesData } from "../lib/IActivitiesData";

export const createActivitiesController = async (req: Request) => {

    const {title, resum, objective, BNCC, time_total, necessary_resources, guide} = req.body;
    if (!title || !objective || !BNCC || !time_total || !necessary_resources || !guide) {
        throw {status: 400, message: "Missing required fields"};
    }
    
    const newActivity = await createActivitiesRepository(req.body);

    return newActivity;
};