import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // Stack is used to define the navigation stack
    <Stack>
        {/* Screen is used to define the screen on the stack */}
        <Stack.Screen name="index" options={{
            headerTitle: "Login", // Set the title of the screen
            headerShown: false // Hide the header
        }}/>
        <Stack.Screen name="home" options={{
            headerTitle: "Home",
        }}/>
    </Stack>
  );
}