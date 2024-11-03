import { IActivitiesFormSubmit } from "../lib/IActivities";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const createActivity = async (valuesForm: IActivitiesFormSubmit) => {
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
};

export default createActivity;