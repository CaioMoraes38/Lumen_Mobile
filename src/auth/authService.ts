import api from '../services/api'; 

export const registerUser = async (data: any) => {
  try {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('age', String(data.age)); 

    if (data.imageUri) {
      const localUri = data.imageUri;
      const filename = localUri.split('/').pop() || 'avatar.jpg';
      
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image/jpeg`;

      formData.append('file', {
        uri: localUri,
        name: filename,
        type: type,
      } as any); 
    }

    const response = await api.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || "Erro ao conectar com o servidor";
    throw new Error(message);
  }
};