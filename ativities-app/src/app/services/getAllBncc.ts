
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAllBncc = async () => {
    try{
        const response = await fetch(`${baseUrl}/api/options/bncc`);
        const data = await response.json();
        
        if(!response.ok){
            throw new Error("Erro ao buscar bnccs!");
        }
        return data;
    }
    catch(error: any){
        throw new Error(error);
    };
};

export default getAllBncc;