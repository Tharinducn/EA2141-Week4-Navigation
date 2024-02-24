import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function VerticalScrollView() {
  return (
    <ScrollView style={{backgroundColor: 'yellow'}}>
      <Text style={styles.heading}>Text 1</Text>
      <View style={{height: 300, width: 150, backgroundColor: 'blue'}} />
      <Text style={styles.subHeading}>Text 2</Text>
      <View style={{height: 200, width: 150, backgroundColor: 'green'}} />
      <Text style={styles.subHeading}>Text 3</Text>
      <View style={{height: 400, width: 150, backgroundColor: 'red'}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: 'red'
  },
  subHeading: {
    fontSize: 30,
    color: 'red'
  }
});
