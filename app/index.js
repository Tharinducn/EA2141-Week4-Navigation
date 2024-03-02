import { View, Pressable, StyleSheet, Text, FlatList } from "react-native";
import { Link } from "expo-router";

const TODOS = [
    {
        id: 1,
        title: 'Grocery List',
        content: 'Apples, Bananas, Bread, Milk, Eggs',
    },
    {
        id: 2,
        title: 'ToDo',
        content: 'Complete React Native assignment',
    },
    {
        id: 3,
        title: 'Workout Plan',
        content: 'Run 5 miles, 50 pushups, 100 situps',
    },
    {
        id: 4,
        title: 'Recipe',
        content: 'Pasta, Tomato Sauce, Cheese, Basil',
    },
    {
        id: 5,
        title: 'Shopping List',
        content: 'Shoes, Shirts, Pants, Socks, Underwear',
    },
    {
        id: 6,
        title: 'Homework',
        content: 'Complete Math assignment, Write a 5-page essay',
    },
    {
        id: 7,
        title: 'Chores',
        content: 'Take out the trash, Do the dishes, Vacuum the house',
    },
    {
        id: 8,
        title: 'Errands',
        content: 'Pick up dry cleaning, Get groceries, Fill up the car with gas',
    },
    {
        id: 9,
        title: 'Study',
        content: 'Read 3 chapters of the book, Take notes for the exam',
    },
    {
        id: 10,
        title: 'Project',
        content: 'Complete the project proposal, Create a presentation',
    },
];

export default function Page() {
    return (
        <View style={styles.container}>
            <Link href="note" asChild>
                <Pressable style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add New Note</Text>
                </Pressable>
            </Link>
            <FlatList
                data={TODOS}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteTitle}>{item.title}</Text>
                        <Text>{item.content}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.title}
            />
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