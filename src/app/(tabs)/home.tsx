import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardRoom from "../../components/cardRoom/cardRoom";
import ButtonCreateRoom from "../../components/createNewRoomButton/createNewRoom";
import CustomModal from "../../components/createNewRoomModal/createNewRoomModal";
import { getRooms } from "../../utils/api/createRoom/createRoom";
import { useRouter } from "expo-router";
import styles from "../_styles/stylesDefault";

export default function Home() { 
    const [loading, setLoading] = useState(false); 
    const [rooms, setRooms] = useState<any[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const router = useRouter();



   const fetchRooms = async () => {
        try {
            setLoading(true);
            const data = await getRooms();
            setRooms(data); 

        } catch (error) {
            console.log("Erro ao carregar as salas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);
    

    const handleCreateNewRoom = async (formData: any) => {
        try {
        } catch (error) {
            console.log("Erro ao criar sala:", error);
        }
    };



    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#7C3AED" />
                    <Text style={{ marginTop: 10, color: '#f5efef' }}>Carregando salas...</Text>
                </View>
            ) : (
                <FlatList
                    style={styles.content}
                    data={rooms} 
                    contentContainerStyle={{ paddingVertical: 10 }}
                    keyExtractor={(item) => item.id}
                   renderItem={({ item }) => {
                        const avataresDosMembros = item.room_members
                            ?.map((member: any) => member.users?.avatarUrl)
                            .filter(Boolean) || [];

                        return (
                            <CardRoom 
                                title={item.name} 
                                image={item.image} 
                                amountPhoto={item._count?.photos || 0} 
                                members={item._count?.room_members || 1}
                                memberAvatars={avataresDosMembros} 
                                
                                imageCover={item.coverUrl}
                                onPress={() => router.push(`../roomPhotos/${item.id}`)}   
                            />
                        );
                    }}
                    ListEmptyComponent={
                        <Text style={{ textAlign: 'center', marginTop: 20, color: '#a19d9d' }}>
                            Você ainda não participa de nenhuma sala.
                        </Text>
                    }
                />
            )}
            <ButtonCreateRoom onPress={() => setIsOpenModal(true)} />
            <CustomModal visible={isOpenModal} onClose={() => setIsOpenModal(false)} title="Criar Nova Sala">
                <Text>Conteúdo do modal</Text>
            </CustomModal>
             

        </SafeAreaView>
    );
}