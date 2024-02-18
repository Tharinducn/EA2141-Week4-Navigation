import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";

export default function Note() {

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Note Title"
        style={styles.titleInput}
      />
      <TextInput
        placeholder="Note Content"
        style={styles.contentInput}
        multiline
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>Save Note</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,

  },
  contentInput: {
    fontSize: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  addButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 20,
    color: 'white',
    padding: 20,
    fontWeight: '600'
  },
});