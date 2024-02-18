import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "My Notes",
        }}/>
        <Stack.Screen name="note" options={{
            headerTitle: "Add Note",
        }}/>
    </Stack>
  );
}