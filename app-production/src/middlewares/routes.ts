import { Router } from "express";
import handleActivitiesRoutes from "./handleActivitiesRoute";
const routes = Router();






routes.use("/activities", handleActivitiesRoutes);



export default routes;