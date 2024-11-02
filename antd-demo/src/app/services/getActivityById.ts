

const baseUrl = "http://localhost:3000";

const getActivityById = async (id: number) => {
    try{
        const response = await fetch(`${baseUrl}/api/activities/${id}`, {
            cache: 'no-store',
        });
        const activityData = await response.json();
        
        return activityData;
    }
    catch(e){
        console.error(e);
        return {};
    };
};

export default getActivityById;