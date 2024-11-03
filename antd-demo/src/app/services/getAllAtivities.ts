import { IActivitiesData } from "../lib/IActivities";

const baseUrl = "http://localhost:3000";

const getAllActivities = async (): Promise<IActivitiesData[]> => {
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
};

export default getAllActivities;