import React from 'react';
import { ImageBackground, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styleCardRoom";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DefaultColors } from "../../utils/colors/defaultColors";


interface CardRoomProps {
    title: string;
    onPress: () => void;
    amountPhoto: number;
    image: string;
    members: number;
    memberAvatars?: string[];
    imageCover?: string;
}


export default function CardRoom(props: CardRoomProps) {
    const imageSource = { uri: props.imageCover || props.image };

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
           
            <ImageBackground 
                source={imageSource} 
                style={styles.imageContainer} 
                imageStyle={{ borderRadius: 30 }}
                resizeMode="cover"
            >
                <View style={styles.titleAndMembers}>
                    <Text style={styles.title}>{props.title}</Text>
                    
                    <TouchableOpacity style={styles.membersButton}>
                        {props.memberAvatars && props.memberAvatars[0] && (
                            <Image source={{ uri: props.memberAvatars[0] }} style={styles.membersView} />
                        )}
                        {props.memberAvatars && props.memberAvatars[1] && (
                            <Image source={{ uri: props.memberAvatars[1] }} style={styles.membersView1} />
                        )}
                        {props.memberAvatars && props.memberAvatars[2] && (
                            <Image source={{ uri: props.memberAvatars[2] }} style={styles.membersView2} />
                        )}
                        {props.members > 3 && (
                            <View style={styles.membersView3}>
                                <Text style={styles.membersCount}>+{props.members - 3}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.viewAmountPhoto}>
                    <FontAwesome5 name="images" size={15} color={DefaultColors.text} />
                    <Text style={styles.amountPhoto}>{props.amountPhoto} fotos</Text>
                </View>
                

            </ImageBackground>
        </TouchableOpacity>
    );
}