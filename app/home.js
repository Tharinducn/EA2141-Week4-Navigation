import { FlatList, StyleSheet, Text, View, Image} from "react-native";

// Data for the FlatList
const data = [
  {
    id: 1,
    title: 'Margarita',
    description: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass.',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
  },
  {
    id: 2,
    title: 'Blue Margarita',
    description: 'Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.',
    image: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'
  },
  {
    id: 3,
    title: "Tommy's Margarita",
    description: 'Shake and strain into a chilled cocktail glass.',
    image: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
  },
  {
    id: 4,
    title: 'Whitecap Margarita',
    description: 'Place all ingredients in a blender and blend until smooth. This makes one drink.',
    image: 'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg'
  },
  {
    id: 5,
    title: 'Strawberry Margarita',
    description: 'Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.',
    image: 'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg'
  },
  {
    id: 6,
    title: 'Smashed Watermelon Margarita',
    description: 'In a mason jar muddle the watermelon and 5 mint leaves together into a puree and strain. Next add the grapefruit juice, juice of half a lime and the tequila as well as some ice. Put a lid on the jar and shake. Pour into a glass and add more ice. Garnish with fresh mint and a small slice of watermelon.',
    image: 'https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg'
  }
];

export default function Home() {

  // Item to render for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  // Separator for each data item
  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id} // Unique key for each item
      ItemSeparatorComponent={renderSeparator}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between', 
  },
  textContainer: {
    flex: 1, 
    marginRight: 10,
  },
  image: {
    width: 100, 
    height: 100,
    borderRadius: 50, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
  separator: {
    height: 10,
    backgroundColor: '#CCCCCC', 
    marginLeft: 10, 
    marginRight: 10, 
  },
});

