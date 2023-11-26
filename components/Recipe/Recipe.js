import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSelector } from "react-redux";

const Recipe = () => {
  //   console.log("recipes: ", recipes);
  const recipes = useSelector((state) => state.recipes.recipes);
  const navigation = useNavigation();

  return (
    <Animated.View entering={FadeInDown.duration(300)} style={styles.recipe}>
      <Text style={styles.recipeTitle}>Recipe</Text>
      <View style={styles.recipeContainer}>
        {recipes &&
          recipes.map((recipe, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.cards}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("RecipeDetail", { id: recipe.idMeal })
                }
              >
                <Image
                  style={styles.RecipeImg}
                  source={{ uri: recipe.strMealThumb }}
                />
                <Text numberOfLines={1} style={styles.recipeText}>
                  {recipe.strMeal}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </Animated.View>
  );
};
export default Recipe;

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
