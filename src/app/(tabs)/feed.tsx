import { View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../_styles/stylesDefault";


export default function Feed() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text>Feed</Text>
    </SafeAreaView>
  );
}