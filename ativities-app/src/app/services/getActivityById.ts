

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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