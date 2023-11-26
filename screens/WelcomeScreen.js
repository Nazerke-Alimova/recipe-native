import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { colors } from "../assets/constants/colors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchRecipes } from "../store/recipesSlice";
const WelcomeScreen = ({ navigation }) => {
  const ringOnePadding = useSharedValue(0);
  const ringTwoPadding = useSharedValue(0);
  const dispatch = useDispatch();
  const categoryLoaded = useSelector((state) => state.categories.loaded);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const recipeLoaded = useSelector((state) => state.recipes.loaded);

  useEffect(() => {
    setTimeout(() => {
      // ringOnePadding.value=20,
      // ringTwoPadding.value=15
      ringOnePadding.value = withSpring(20);
      ringTwoPadding.value = withSpring(15);
      dispatch(fetchCategories());
    }, 2000);
  }, []);

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchRecipes(activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    if (categoryLoaded && recipeLoaded) {
      navigation.navigate("Home");
    }
  }, [categoryLoaded, recipeLoaded]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.ringOne, { padding: ringOnePadding }]}>
        <Animated.View style={[styles.ringTwo, { padding: ringTwoPadding }]}>
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>Foody</Text>
        <Text style={styles.subtitle}>Food is always right</Text>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.amber500,
  },
  welcomeImage: {
    width: 100,
    height: 100,
  },
  ringTwo: {
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255, 0.5)",
    // padding: 20,
  },
  ringOne: {
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255, 0.3)",
    // padding: 30,
  },
  textBlock: {
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 50,
  },
  subtitle: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
});
