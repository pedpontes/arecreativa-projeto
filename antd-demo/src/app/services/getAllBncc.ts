
const baseUrl = 'http://localhost:3000';

const getAllBncc = async () => {
    try{
        const response = await fetch(`${baseUrl}/api/options/bncc`);
        const data = await response.json();
        return data;
    }
    catch(e){
        console.error(e);
        return [];
    };
};

export default getAllBncc;