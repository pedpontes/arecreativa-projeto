import { Request, Response, NextFunction } from "express";
import { getActivitiesByIdRepository } from "../repositories/activitiesRepository/getActivitiesByIdRepository";

const verifyExistActivity = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;

    const existActivity = await getActivitiesByIdRepository(parseInt(id));
    if(!existActivity){
        res.status(404).json({message: "Activity not found"});
    }

    next();
};

export default verifyExistActivity;