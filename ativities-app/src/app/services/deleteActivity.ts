

const baseUrl = 'http://localhost:3000';

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