import { BNCC, IActivitiesData, IActivitiesFormSubmit, IActivityBNCCData } from "./IActivities";
import { IApiService } from "./IApiService";

export class ApiConsumer implements IApiService{
    private readonly ApiService: IApiService;

    constructor(apiService: IApiService){
        this.ApiService = apiService;
    };

    async createActivity(valuesForm: IActivitiesFormSubmit): Promise<void> {
        await this.ApiService.createActivity(valuesForm);
    }

    async deleteActivity(id: number): Promise<void> {
        await this.ApiService.deleteActivity(id);
    }

    async getAllActivities(): Promise<IActivitiesData[]> {
        return await this.ApiService.getAllActivities();
    }

    async getActivityById(id: number): Promise<IActivityBNCCData> {
        return await this.ApiService.getActivityById(id);
    }

    async updateActivity(id: number, data: IActivitiesFormSubmit): Promise<void> {
        await this.ApiService.updateActivity(id, data);
    }

    async getAllBnccOptions(): Promise<BNCC[]> {
        return await this.ApiService.getAllBnccOptions();
    }

    async getPdfActivityById(id: number): Promise<Blob> {
        return await this.ApiService.getPdfActivityById(id);
    }

    async toggleActivityStatus(id: number): Promise<void> {
        await this.ApiService.toggleActivityStatus(id);
    }
}