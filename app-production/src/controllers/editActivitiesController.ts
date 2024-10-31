import { Request } from 'express';
import { editActivitiesRepository, getActivitiesByIdRepository } from '../repositories/activitiesRepository';


export const editActivitiesController = async (req: Request) => {
    const {id} = req.params;
    if(req.body == null){
        throw {status: 400, message: "Bad request"};
    }
    
    //validate if the camps are empty
    Object.keys(req.body).forEach((key) => {
        if(key !== "resum"){
            if(req.body[key] === "" || req.body[key] === null || key == "id" || key == "actived"){
                throw {status: 400, message: "Bad request"};
            } 
        }
    });

    const existActivity = await getActivitiesByIdRepository(Number(id));
    if(!existActivity){
        throw {status: 404, message: "Activity not found"};
    }

    await editActivitiesRepository(Number(id), req.body);
    return;
};