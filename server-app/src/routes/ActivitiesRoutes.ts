import {Router, Request, Response} from "express";
import {IActivitiesData} from "../lib/IActivities";
import validationData from "../middlewares/validationActivity";
import verifyExistActivity from "../middlewares/verifyExistActivity";
import getAllActivitiesController from "../controllers/getAllActivitiesController";
import createActivitiesController from "../controllers/createActivitiesController";
import deleteActivitiesController from "../controllers/deleteActivitiesController";
import changeStatusActivitiesController from "../controllers/changeStatusActivitiesController";
import editActivitiesController from "../controllers/updateActivitiesController";
import getActivityByIdController from "../controllers/getActivityByIdController";
import getPdfController from "../controllers/getPdfController";
const activityRoute = Router();


//list of activities

activityRoute.get("/",async (req: Request, res: Response) => {
    try {
        const activities = await getAllActivitiesController();
        res.status(200).json(activities);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({message: error.message});     
    }
});

//create an activity

activityRoute.post("/",validationData, async (req: Request, res: Response) => {
        const activity: IActivitiesData = req.body;
        try {
            await createActivitiesController(activity);
            res.status(201).send();
        } catch (error: any) {
            console.error(error);
            res.status(500).json({message: error.message});
        }    
    });

//edit an activity

activityRoute.put("/:id", validationData, verifyExistActivity,async (req: Request, res: Response) => {
    const { id } = req.params;
    const activity: IActivitiesData = req.body;
        try {
            await editActivitiesController(parseInt(id), activity);
            res.status(200).send();
        } catch (error: any) {
            console.error(error);
            res.status(500).json({message: error.message});
        }
    });

//delete an activity

activityRoute.delete("/:id",verifyExistActivity, async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await deleteActivitiesController(parseInt(id));
        res.status(204).send();
    } catch (error: any) {
        console.error(error);
        res.status(500).json({message: error.message}); 
    }
    });

//change status of an activity

activityRoute.patch("/:id/changestatus",verifyExistActivity, async (req: Request, res: Response) => {
    const { id } = req.params;
        try {
            await changeStatusActivitiesController(parseInt(id));
            res.status(204).send();
        } catch (error: any) {
            console.error(error);
            res.status(500).json({message: error.message});
        }
    });

//get activity by id

activityRoute.get("/:id",verifyExistActivity, async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const activity = await getActivityByIdController(parseInt(id));
        res.status(200).json(activity);
    }
    catch (error: any){
        console.error(error);
        res.status(500).json({message: error.message}); 
    }
    });

//download pdf

activityRoute.get("/pdf/:id",verifyExistActivity ,async (req: Request, res: Response) => {
    try {
        await getPdfController(req);
        res.status(200).download(`./pdfs/activity-${req.params.id}/activity.pdf`);
    }
    catch (error: any){
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

export default activityRoute;