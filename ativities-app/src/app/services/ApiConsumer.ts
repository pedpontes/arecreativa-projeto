import { BNCC, IActivitiesData, IActivitiesFormSubmit, IActivityBNCCData } from "./IActivities";
import { IApiService } from "./IApiService";

export class ApiConsumer implements IApiService{
    private readonly ApiService: IApiService;

    constructor(apiService: IApiService){
        this.ApiService = apiService;
    };

    async createActivity(valuesForm: IActivitiesFormSubmit): Promise<void> {
        try {
            await this.ApiService.createActivity(valuesForm);
        } catch (error:any) {
            throw new Error(error);
        }
    }

    async deleteActivity(id: number): Promise<void> {
        try {
            await this.ApiService.deleteActivity(id);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getAllActivities(): Promise<IActivitiesData[]> {
        try{
            return await this.ApiService.getAllActivities();
        }
        catch(error: any){
            throw new Error(error);
        };
    }

    async getActivityById(id: number): Promise<IActivityBNCCData> {
        try{
            return await this.ApiService.getActivityById(id);
        }
        catch(error: any){
            throw new Error(error);
        };
    }

    async updateActivity(id: number, data: IActivitiesFormSubmit): Promise<void> {
        try {
            await this.ApiService.updateActivity(id, data);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getAllBnccOptions(): Promise<BNCC[]> {
        try {
            return await this.ApiService.getAllBnccOptions();
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async getPdfActivityById(id: number): Promise<Blob> {
        try {
            return await this.ApiService.getPdfActivityById(id);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async toggleActivityStatus(id: number): Promise<void> {
        try {
            await this.ApiService.toggleActivityStatus(id);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}