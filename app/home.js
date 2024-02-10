import { View, Text, StyleSheet } from "react-native";

export default function Home() {

  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, User!</Text>
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