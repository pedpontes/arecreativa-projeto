import { Router, Request, Response } from  "express";
import { getBnccOptionsController } from "../controllers/getBnccOptionsController";
const route = Router();


route.get("/bncc",async (req: Request, res: Response) => {
    try {
        const bnccOptions = await getBnccOptionsController();
        res.status(200).json(bnccOptions);
    }
    catch (error: any){
        console.error(error);
        res.status(error.status ?? 500).send(error.message);
    }
});

export default route;