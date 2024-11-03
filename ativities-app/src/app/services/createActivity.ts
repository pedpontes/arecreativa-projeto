import { IActivitiesFormSubmit } from "../lib/IActivities";

const baseUrl = 'http://localhost:3000';

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