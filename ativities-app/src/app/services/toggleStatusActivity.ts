


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

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