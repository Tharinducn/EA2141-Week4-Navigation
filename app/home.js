import { ScrollView, StyleSheet, Text, View } from "react-native";
import HorizontalScrollView from "../components/HorizontalScrollView";
import VerticalScrollView from "../components/VerticalScrollView";

export default function Home() {
  return (
    // Comment out the component you don't want to see
    <HorizontalScrollView />
    // <VerticalScrollView />
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

