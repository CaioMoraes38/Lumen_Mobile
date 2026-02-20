import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#000000",
    },
    textAccount: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "left",
        textShadowColor: 'rgba(124, 58, 237, 0.5)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
        letterSpacing: 1.5,
        lineHeight: 40,
        marginLeft: '5%',
    },
    textSubtitle: {
        color: "#A78BFA", 
        marginTop: 10,
        fontSize: 14,
        fontWeight: "600",
    },

    uploadContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    uploadCircle: {
        width: 140,
        height: 140,
        borderRadius: 70, 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#4B5563', 
        borderStyle: 'dashed', 
    },
    imageFilled: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: '#7C3AED', 
    },
    uploadLabel: {
        color: '#9CA3AF',
        marginTop: 8,
        fontSize: 12,
        fontWeight: '600',
    },
    plusBadge: {
        position: 'absolute', 
        bottom: 5,
        right: 5,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#7C3AED', 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#000000', 
    },

    formContainer: {
        paddingHorizontal: '5%',
        gap: 17, 
    },
   
    bottomGlow: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 250, 
        zIndex: 1,   
    }
});

export default styles;