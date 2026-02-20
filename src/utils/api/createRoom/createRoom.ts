import api from '../../../services/api';

export const createRoom = async (data: any) => {
   try {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('description', data.description);

    if (data.imageUri) {
      const localUri = data.imageUri;
      const filename = localUri.split('/').pop() || 'cover.jpg';
      
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image/jpeg`;

      formData.append('file', {
        uri: localUri,
        name: filename,
        type: type,
      } as any);
    }

    const response = await api.post('/rooms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || "Erro ao conectar com o servidor";
    throw new Error(message);
  }

  

}

export const getRooms = async () => {
    try {
        const response = await api.get('/rooms/my-rooms');
        return response.data;
    } catch (error: any) {
        const message = error.response?.data?.message || "Erro ao buscar as salas";
        throw new Error(message);
    }
};