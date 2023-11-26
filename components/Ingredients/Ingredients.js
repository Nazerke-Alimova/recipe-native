import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Ingredients = ({ detail }) => {
  return (
    <View>
      <Text style={styles.txt}>Ingredients</Text>
      {[...Array(20).keys()].map((index) => {
        if (detail[`strIngredient${index + 1}`]) {
          return (
            <View key={index} style={styles.ingredientContainer}>
              <View style={styles.yellowDot} />
              <Text style={styles.measure}>
                {detail[`strMeasure${index + 1}`]}
              </Text>
              <Text style={styles.ingredient}>
                {detail[`strIngredient${index + 1}`]}
              </Text>
            </View>
          );
        }
      })}
    </View>
  );
};
export default Ingredients;

const styles = StyleSheet.create({
  txt: {
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 10,
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  yellowDot: {
    backgroundColor: "rgba(255, 191, 0, 0.5)",
    borderRadius: 90,
    width: 10,
    height: 10,
  },
  measure: {
    fontWeight: "800",
    fontSize: 16,
  },
  ingredient: {
    fontSize: 16,
  },
});
