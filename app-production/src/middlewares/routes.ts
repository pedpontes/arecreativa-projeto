import { Router } from "express";
import handleActivitiesRoutes from "./handleActivitiesRoute";
import handleOptionsRoutes from "./handleOptionsRoute";
const routes = Router();






routes.use("/activities", handleActivitiesRoutes);
routes.use("/options", handleOptionsRoutes);

export default routes;