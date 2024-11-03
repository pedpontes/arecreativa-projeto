import { Router } from "express";
import ActivitiesRoute from "./ActivitiesRoutes";
import OptionsRoute from "./OptionsRoutes";
const routes = Router();

routes.use("/activities", ActivitiesRoute);
routes.use("/options", OptionsRoute);

export default routes;