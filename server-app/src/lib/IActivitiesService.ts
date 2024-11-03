import { Activities } from "@prisma/client";
import { BNCC, IActivitiesData, IActivitiesDataById } from "./IActivities";

export interface IActivityService {
    changeStatusActivity(data: Activities): Promise<void>;
    createActivity(data: IActivitiesData): Promise<void>;
    getAllActivities(): Promise<IActivitiesData[]>;
    getActivityById(id: number): Promise<IActivitiesDataById>;
    updateActivity(id: number, data: IActivitiesData): Promise<void>;
    deleteActivity(id: number): Promise<void>;
    getAllBnccOptions(): Promise<BNCC[]>;
};


//TODO: Implement the IActivityService interface in the ActivitiesService class