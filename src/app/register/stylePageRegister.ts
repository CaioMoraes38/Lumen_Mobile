import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     safeAreaView:{
        flex:1,
        padding:"1%",
        backgroundColor:"#000000"
    },
    textAccount:{
        fontSize:32,
        fontWeight:"600",
        color:"#FFFFFF",
        marginBottom:20,
        textAlign:"left",
        textShadowColor: 'rgba(124, 58, 237, 0.5)', 
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
        letterSpacing: 4,
    }

})
export default styles;