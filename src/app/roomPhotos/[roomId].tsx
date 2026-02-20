import { View, Text, ActivityIndicator, FlatList, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import styles from "../_styles/stylesDefault";
import { ListPhotos } from "@/src/utils/api/listPhotos/listPhoto";

// Calculando o tamanho exato para caberem 3 fotos por linha perfeitamente
const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns; 

export default function RoomPhotos() {
  const { roomId } = useLocalSearchParams(); 
  const [photos, setPhotos] = useState<any[]>([]); // Garanta que comece como um array vazio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        setLoading(true);
        const data = await ListPhotos(String(roomId)); 
        setPhotos(data); // Salva as fotos que vieram do banco
      } catch (error) {
        console.log("Erro no front:", error);
      } finally {
        setLoading(false);
      }
    };

    if (roomId) fetchFotos();
  }, [roomId]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      
      <View style={{ padding: 15 }}>
        <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>
          Fotos da Sala
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#7C3AED" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item, index) => item.id ? String(item.id) : String(index)}
          numColumns={numColumns} // ⬅️ Isso que faz a mágica de criar o Grid!
          renderItem={({ item }) => (
            <Image 
              // 👇 ATENÇÃO: Troque "url" pelo nome exato da coluna que salva o link no seu Prisma (ex: imageUrl, photoUrl)
              source={{ uri: item.url }} 
              style={{ 
                width: imageSize, 
                height: imageSize, 
                borderWidth: 1, // Uma bordinha fina para separar as fotos
                borderColor: '#110d0d' 
              }} 
            />
          )}
          ListEmptyComponent={
            <Text style={{ color: '#a19d9d', textAlign: 'center', marginTop: 50 }}>
              Nenhuma foto nesta sala ainda. Que tal ser o primeiro a postar?
            </Text>
          }
        />
      )}

    </SafeAreaView>
  );
}