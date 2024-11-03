

const baseUrl = "http://localhost:3000";

const getActivityById = async (id: number) => {
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
};

export default getActivityById;