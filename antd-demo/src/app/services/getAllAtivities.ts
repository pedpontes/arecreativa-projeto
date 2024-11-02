import { IActivitiesData } from "../lib/IActivities";

const baseUrl = "http://localhost:3000";

const getAllActivities = async (): Promise<IActivitiesData[]> => {
    try{
        const response = await fetch(`${baseUrl}/api/activities`,{
            cache: 'no-store',
        });
        const activitiesData = await response.json();
        
        return activitiesData;
    }
    catch(e){
        console.error(e);
        return [];
    };
};

export default getAllActivities;