import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        padding:"1%",
        backgroundColor:"#000000"
    },
    viewTiltle:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
       
    },
    viewBottum:{
        width:"100%",
        height:"60%",
        alignItems:"center",
        justifyContent:"flex-end",
        marginBottom:"10%",
        padding:"1%"
        },
    textButton:{
        color:"white",
        fontSize:20,
        fontWeight:"600",
        opacity: 0.8,
        letterSpacing: 1,


    },
   textTitle: {
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
        letterSpacing: 1.5,
        textShadowColor: 'rgba(124, 58, 237, 0.5)', 
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
    },
    textSubTitle: {
        color: "#ddd6fe", 
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 10,
        marginTop: 8,
        textTransform: "uppercase",
        opacity: 0.8,
    },
    
    textRegister:{
        color:"#737070",
        fontSize:16,    
        marginTop:"5%",
    },
    textLink:{
        color:"white",
        fontSize:15,
        fontWeight:"600",
    },

    button:{
        flex:1,
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        borderWidth:1,
        borderColor:"white",
        flexDirection:"row",
    },
    iconPosition:{
        position:"absolute",
        left:"7%",
    }
})

export default styles;