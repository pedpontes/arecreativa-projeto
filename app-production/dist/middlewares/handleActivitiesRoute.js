"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const listActivitiesController_1 = require("../controllers/listActivitiesController");
const createActivitiesController_1 = require("../controllers/createActivitiesController");
const express_1 = require("express");
const deleteActivitiesController_1 = require("../controllers/deleteActivitiesController");
const route = (0, express_1.Router)();
//list of activities
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activities = yield (0, listActivitiesController_1.listActivitiesController)(req, res);
        res.status(200).json(activities);
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
}));
//create an activity
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newActivity = yield (0, createActivitiesController_1.createActivitiesController)(req, res);
        res.status(201).json(newActivity);
    }
    catch (error) {
        res.status(error.status).send(error.message);
    }
}));
//edit an activity
// route.put("/:id",(req: Request, res: Response) => {
//         editActivities(req,res);
//     });
//delete an activity
route.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, deleteActivitiesController_1.deleteActivitiesController)(req, res);
        res.status(204).send();
    }
    catch (error) {
        res.status(error.status).send(error.message);
    }
}));
//change status of an activity
// route.patch("/:id/changestatus", (req: Request, res: Response) => {
//         changeStatusActivities(req,res);
//     });
exports.default = route;
