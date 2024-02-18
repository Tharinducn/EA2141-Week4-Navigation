import { View, Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View style={styles.container}>
            <Link href="note" asChild>
                <Pressable style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add New Note</Text>
                </Pressable>
            </Link>
            <View style={styles.noteItem}>
                <Text style={styles.noteTitle}>{'Grocery List'}</Text>
                <Text>{'Apples, Bananas, Bread, Milk, Eggs'}</Text>
            </View>
            <View style={styles.noteItem}>
                <Text style={styles.noteTitle}>{'ToDo'}</Text>
                <Text>{'Complete React Native assignment'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    noteItem: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    addButtonText: {
        fontSize: 24,
        color: 'white',
        padding: 20,
        fontWeight: '600'
    },
});