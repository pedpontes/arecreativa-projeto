import {listActivitiesController} from "../controllers/listActivitiesController";
import {createActivitiesController} from "../controllers/createActivitiesController";
import {Router, Request, Response} from "express";
import {deleteActivitiesController} from "../controllers/deleteActivitiesController";
import { changeStatusActivitiesController } from "../controllers/changeStatusActivitiesController";
import { editActivitiesController } from "../controllers/editActivitiesController";
const route = Router();


//list of activities

route.get("/",async (req: Request, res: Response) => {
    try {
        const activities = await listActivitiesController(req);
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).send("Internal server error");     
    }
});

//create an activity

route.post("/",async (req: Request, res: Response) => {
        try {
            const newActivity = await createActivitiesController(req);
            
            res.status(201).json(newActivity);
        } catch (error: any) {
            res.status(error.status ?? 500).send(error.message);
        }    
    });

//edit an activity

route.put("/:id",async (req: Request, res: Response) => {
        try {
            const newActivity = await editActivitiesController(req);
            res.status(200).json(newActivity);
        } catch (error: any) {
            res.status(error.status ?? 500).send(error.message);
        }
    });

//delete an activity

route.delete("/:id",async (req: Request, res: Response) => {
    try {
        await deleteActivitiesController(req);
        res.status(204).send();
    } catch (error: any) {
        res.status(error.status ?? 500).send(error.message);
    }
    });

//change status of an activity

route.patch("/:id/changestatus",async (req: Request, res: Response) => {
        try {
            await changeStatusActivitiesController(req);
            res.status(204).send();
        } catch (error: any) {
            res.status(error.status ?? 500).send(error.message);
        }
    });

    //TODO: get activity by id

route.get("/:id",async (req: Request, res: Response) => {

});

export default route;