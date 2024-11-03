

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const deleteActivity = async (activityId: number) => {
    try {
        const response = await fetch(`${baseUrl}/api/activities/${activityId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Error to delete activity");
        }
    } catch (error: any) {
        throw new Error(error);
    }

};

export default deleteActivity;