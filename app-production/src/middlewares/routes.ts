import { Router } from "express";
import handleActivitiesRoutes from "./handleActivitiesRoute";
const routes = Router();






routes.use("/api/activities", handleActivitiesRoutes);



export default routes;