import api from '../../../services/api';

export const ListPhotos = async (roomId:string)=>{
    try{
        const response = await api.get(`photos/room/${roomId}`);
        return response.data;
    }
    catch(error:any){
        const message = error.response?.data?.message || "Erro ao buscar as fotos";
        throw new Error(message);
    }
}