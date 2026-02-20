import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './stylesModal';

interface PropsCustomModal {
    visible: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function CustomModal({ visible, onClose, title, children }: PropsCustomModal) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            transparent      
            >
                <View style={styles.container}>
                    <View style={styles.contente}>

                    </View>
                </View>
        </Modal>

    )};
    