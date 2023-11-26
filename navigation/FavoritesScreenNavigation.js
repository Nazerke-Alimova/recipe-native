/*import { StyleSheet, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();

const FavoritesSreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default FavoritesSreen;

const style = StyleSheet.create({});
*/

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteScreen = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Получение списка избранных рецептов из AsyncStorage
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites !== null) {
        // Обновление списка избранных рецептов
        setFavoriteRecipes(JSON.parse(favorites));
      }
    } catch (error) {
      console.error("Error getting favorites:", error);
    }
  };

  return (
    <View style={styles.recipeContainer}>
      <Text>Favorite Recipes</Text>
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.recipeContainer}>
            <Image
              style={styles.RecipeImg}
              source={{ uri: item.strMealThumb }}
            />
            <Text numberOfLines={1} style={styles.recipeText}>
              {item.strMeal}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  recipe: {
    marginTop: 10,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  RecipeImg: {
    width: "100%",
    height: 240,
    marginBottom: 5,
    borderRadius: 25,
  },
  recipeContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    gap: 10,
  },
  cards: {
    alignItems: "center",
    width: "45%",
  },
});
