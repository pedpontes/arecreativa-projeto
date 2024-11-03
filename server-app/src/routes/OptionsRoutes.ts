import { Router, Request, Response } from  "express";
import getBnccOptionsController from "../controllers/getBnccOptionsController";
const optionsActivityRoute = Router();


optionsActivityRoute.get("/bncc",async (req: Request, res: Response) => {
    try {
        const bnccOptions = await getBnccOptionsController();
        res.status(200).json(bnccOptions);
    }
    catch (error: any){
        console.error(error);
        res.status(500).json({message: error.message});
    }
});

export default optionsActivityRoute;