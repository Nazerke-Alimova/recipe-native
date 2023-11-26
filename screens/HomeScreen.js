import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import HomeNavBar from "../components/HomeNavBar/HomeNavBar";
import HomeTextBlock from "../components/HomeTextBlock/HomeTextBlock";
import InputRecipe from "../components/InputRecipe/InputRecipe";
import { useEffect, useState } from "react";
import { getCategories } from "../lib/getCategories";
import { getRecipe } from "../lib/getRecipe";
import Categories from "../components/Categories/Categories";
import Recipe from "../components/Recipe/Recipe";
import { getDetails } from "../lib/getDetails";

const HomeScreen = () => {
  // const [categories, setCategories] = useState([]);
  // const [activeCategory, setActiveCategory] = useState("Beef");
  // const [recipes, setRecipes] = useState([]);
  const [inputText, setInputText] = useState("");

  // const handleChangeCategory = (category) => {
  //   setActiveCategory(category);
  // };

  // useEffect(() => {
  //   (async () => {
  //     const res = await getCategories();
  //     setCategories(res);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getRecipe(activeCategory);
  //     // console.log("recipes fetch: ", res);
  //     setRecipes(res);
  //   })();
  // }, [activeCategory]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <HomeNavBar />
        <HomeTextBlock />
        <InputRecipe inputText={inputText} setInputText={setInputText} />
        <Categories />
        <Recipe searchText={inputText} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
});
