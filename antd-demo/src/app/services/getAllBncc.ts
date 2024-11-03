
const baseUrl = 'http://localhost:3000';

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