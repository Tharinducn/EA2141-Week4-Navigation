import { View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View style={styles.container}>
            {/* Link is used to navigate to another screen */}
            <Link href={'/home'}>Go to Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
});