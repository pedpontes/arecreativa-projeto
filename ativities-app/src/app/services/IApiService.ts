import { BNCC, IActivitiesData, IActivitiesFormSubmit, IActivityBNCCData } from "./IActivities";

export interface IApiService {
    createActivity(data: IActivitiesFormSubmit): Promise<void>;
    deleteActivity(id: number): Promise<void>;
    getAllActivities(): Promise<IActivitiesData[]>;
    getActivityById(id: number): Promise<IActivityBNCCData>;
    updateActivity(id: number, data: IActivitiesFormSubmit): Promise<void>;
    getAllBnccOptions(): Promise<BNCC[]>;
    getPdfActivityById(id: number): Promise<Blob>;
    toggleActivityStatus(id: number): Promise<void>;
};