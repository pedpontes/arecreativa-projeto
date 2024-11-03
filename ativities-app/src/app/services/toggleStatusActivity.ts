


const baseUrl = "http://localhost:3000";

const toggleStatusActivity = async (activityId: number) => {
    try{
        const response = await fetch(`${baseUrl}/api/activities/${activityId}/changestatus`, {
            method: "PATCH"
        });
        if(!response.ok) {
            throw new Error("Erro ao alterar status da atividade!");
        }
    }catch(error: any) {
        throw new Error(error);
    }
};

export default toggleStatusActivity