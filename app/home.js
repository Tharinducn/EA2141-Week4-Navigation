import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // declare an async function named fetchData to fetch drink data from the API
    async function fetchData() {
      // try fetching data from the API
      try {
        // The following line fetches a random drink from the API
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        // The following line extracts the JSON body content from the response
        const data = await response.json();
        // The following line sets the drink state to the first drink in the data.drinks array
        setDrink(data.drinks[0]);
        // The following line sets the loading state to false
        setLoading(false);
      } catch (error) { // catch any errors and log them to the console
        console.error(error);
        setLoading(false);
      }
    }
    // call the fetchData function
    fetchData();
  }, []);

  const renderIngredients = (drink) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push(
          <Text key={i} style={styles.ingredient}>
            {drink[`strIngredient${i}`]}: {drink[`strMeasure${i}`] || 'To taste'}
          </Text>
        );
      }
    }
    return ingredients;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>{drink?.strDrink}</Text>
        <Image source={{ uri: drink?.strDrinkThumb }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>Category: {drink?.strCategory}</Text>
          <Text style={styles.detail}>Type: {drink?.strAlcoholic}</Text>
          <Text style={styles.detail}>Glass: {drink?.strGlass}</Text>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionContent}>{drink?.strInstructions}</Text>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {renderIngredients(drink)}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150, // Circular image
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  detail: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#606060',
  },
});

