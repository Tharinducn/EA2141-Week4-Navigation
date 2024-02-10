import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  
  const params = useLocalSearchParams();
  const username = params.username;

  console.log({params})

  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username}</Text>
      <Text style={styles.dateText}>Current Date: {currentDate}</Text>
      <Text style={styles.timeText}>Current Time: {currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  dateText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  timeText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});