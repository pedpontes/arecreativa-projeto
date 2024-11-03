import { IActivitiesFormSubmit } from "../lib/IActivities";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const editActivity = async (activity: IActivitiesFormSubmit, activityId: number) => {

    try{
        const response = await fetch(`${baseUrl}/api/activities/${activityId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activity),
        });
        if(!response.ok){
            throw new Error("Erro ao editar atividade!");
        }
    }
    catch(error: any){
        throw new Error(error);
    };
};

export default editActivity;