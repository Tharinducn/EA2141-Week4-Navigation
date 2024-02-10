import { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        value={username}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        placeholderTextColor="#8e8e93"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        value={password}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor="#8e8e93"
                        secureTextEntry
                        style={styles.input}
                    />
                </View>
                <Link href={{
                    pathname: '/home',
                    params: { username: username }
                }} asChild>
                    <Pressable style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 30,
        borderColor: '#F7F7F7',
        backgroundColor: 'lightgrey',
    },
    inputWrapper: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 20,
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});