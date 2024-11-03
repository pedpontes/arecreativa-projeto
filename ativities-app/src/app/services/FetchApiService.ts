import { BNCC, IActivitiesData, IActivitiesFormSubmit, IActivityBNCCData } from "./IActivities";
import { IApiService } from "./IApiService";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export class FetchApiService implements IApiService{
    async createActivity(valuesForm: IActivitiesFormSubmit): Promise<void> {
        try {
            const response = await fetch(`${baseUrl}/api/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valuesForm),
            });
    
            if (!response.ok) {
                throw new Error('Error in create activity');
            }
    
        } catch (error:any) {
            throw new Error(error);
        }
    }
    async deleteActivity(id: number): Promise<void> {
        try {
            const response = await fetch(`${baseUrl}/api/activities/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error("Error to delete activity");
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }
    async getAllActivities(): Promise<IActivitiesData[]> {
        try{
            const response = await fetch(`${baseUrl}/api/activities`,{
                cache: 'no-store',
            });
            const activitiesData = await response.json();
            
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }
            
            return activitiesData;
        }
        catch(error: any){
            throw new Error(error);
        };
    }
    async getActivityById(id: number): Promise<IActivityBNCCData> {
        try{
            const response = await fetch(`${baseUrl}/api/activities/${id}`, {
                cache: 'no-store',
            });
            const activityData = await response.json();
    
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }
    
            return activityData;
        }
        catch(error: any){
            throw new Error(error);
        };
    }
    async updateActivity(id: number, data: IActivitiesFormSubmit): Promise<void> {
        try{
            const response = await fetch(`${baseUrl}/api/activities/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if(!response.ok){
                throw new Error("Error to update activity!");
            }
        }
        catch(error: any){
            throw new Error(error);
        };
    }
    async getAllBnccOptions(): Promise<BNCC[]> {
        try{
            const response = await fetch(`${baseUrl}/api/options/bncc`);
            const data = await response.json();
            
            if(!response.ok){
                throw new Error("Error to get bncc!");
            }
            return data;
        }
        catch(error: any){
            throw new Error(error);
        };
    }
    async getPdfActivityById(id: number): Promise<Blob> {
        const response = await fetch(`${baseUrl}/api/activities/pdf/${id}`, {
            method: "GET"
        })
    
        if(!response.ok) {
            throw new Error("Error to download pdf");
        }
        return await response.blob();
    }
    async toggleActivityStatus(id: number): Promise<void> {
        try{
            const response = await fetch(`${baseUrl}/api/activities/${id}/changestatus`, {
                method: "PATCH"
            });
            if(!response.ok) {
                throw new Error("Error change status activity!");
            }
        }catch(error: any) {
            throw new Error(error);
        }
    }

}