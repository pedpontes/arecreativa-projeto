import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createActivitiesRepository } from "../repositories/activitiesRepository";

const prisma = new PrismaClient();

export const createActivitiesController = async (req: Request, res: Response) => {
    try {
        const {title, resum, objective, BNCC, time_total, necessary_resources, guide} = req.body;
        if (!title || !objective || !BNCC || !time_total || !necessary_resources || !guide) {
            throw {status: 400, message: "Missing required fields"};
        }
        const newActivity = await createActivitiesRepository(req.body);

        return newActivity;
    } catch (error: any) {
        throw error;
    }
};