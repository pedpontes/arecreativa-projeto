import { NextFunction, Request, Response } from "express";

const validationData = (req: Request, res: Response, next: NextFunction) => {
    const {title, objective, BNCC, time_total, necessary_resources, guide} = req.body;
    if (!title || !objective || !BNCC || !time_total || !necessary_resources || !guide){
        res.status(400).json({message: "Missing required fields"});
    }
    next();
};

export default validationData;
