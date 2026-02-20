import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.3,
        marginTop: height * 0.01,
        backgroundColor: '#6a0505',
        borderRadius: 30,
        
    },
    imageContainer:{
        flex: 1,
        padding:"5%",
        justifyContent: 'flex-end',

    },
    titleAndMembers: {
        minHeight: "20%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
 },
    title: {
        color: '#f5efef',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        flexShrink: 1,

    },
    membersButton: {
        height: "60%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    membersView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    membersView1: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: -15,
    },
    membersView2: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: -15,
    },
    membersView3: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: -15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    membersCount: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    amountPhoto: {
        color: '#f5efef',
        fontSize: 14,
        marginLeft: '6%',
    },
    viewAmountPhoto: {
        backgroundColor: "#801010",
        borderRadius: 20,
        height: "15%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        maxWidth: '60%',
        width: '40%',
        
    },

});