import {listActivitiesController} from "../controllers/listActivitiesController";
import {createActivitiesController} from "../controllers/createActivitiesController";
import {Router, Request, Response} from "express";
import {deleteActivitiesController} from "../controllers/deleteActivitiesController";
const route = Router();


//list of activities

route.get("/",async (req: Request, res: Response) => {
    try {
        const activities = await listActivitiesController(req,res);
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).send("Internal server error");     
    }
});

//create an activity

route.post("/",async (req: Request, res: Response) => {
        try {
            const newActivity = await createActivitiesController(req,res);
            
            res.status(201).json(newActivity);
        } catch (error: any) {
            res.status(error.status).send(error.message);
        }    
    });

//edit an activity

// route.put("/:id",(req: Request, res: Response) => {
//         editActivities(req,res);
//     });

//delete an activity

route.delete("/:id",async (req: Request, res: Response) => {
    try {
        await deleteActivitiesController(req,res);
        res.status(204).send();
    } catch (error: any) {
        res.status(error.status).send(error.message);
    }
    });

//change status of an activity

// route.patch("/:id/changestatus", (req: Request, res: Response) => {
//         changeStatusActivities(req,res);
//     });

export default route;