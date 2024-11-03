
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const getPdfActivity = async (activityId: number) => {
    const response = await fetch(`${baseUrl}/api/activities/pdf/${activityId}`, {
        method: "GET"
    })

    if(!response.ok) {
        throw new Error("Error to download pdf");
    }
    return await response.blob();
};

export default getPdfActivity;