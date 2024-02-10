import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "Login",
            headerShown: false
        }}/>
        <Stack.Screen name="home" options={{
            headerTitle: "Home",
        }}/>
    </Stack>
  );
}