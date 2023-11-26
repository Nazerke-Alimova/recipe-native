import { StyleSheet, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import Category from "../Category/Category";
import { useState } from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  //  console.log(categories);
  return (
    <Animated.ScrollView
      horizontal
      style={styles.containerCategories}
      entering={FadeInDown.duration(400)}
      showHorizontalIndicator={false}
    >
      {categories.length > 0 &&
        categories.map((category, index) => {
          const isActive = category.strCategory == activeCategory;
          const activeButtonStyle = isActive
            ? styles.activeButton
            : styles.inactiveButton;
          // console.log(category);
          return (
            <Category
              key={index}
              name={category.strCategory}
              thumbnail={category.strCategoryThumb}
              isActive={isActive}
            />
          );
        })}
    </Animated.ScrollView>
  );
};
export default Categories;

const styles = StyleSheet.create({
  containerCategories: {
    marginTop: 20,
    // paddingHorizontal: 10,
  },
  categoryButton: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 4,
  },
  activeButton: {
    borderRadius: 999,
    padding: 6,
    backgroundColor: "rgba(255, 191, 0, 0.5)",
  },
  inactiveButton: {
    borderRadius: 999,
    padding: 6,
    // backgroundColor: 'rgba(255, 191, 0, 0.5)',
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  categoryImg: {
    width: 45,
    height: 45,
    borderRadius: 25 / 2,
  },
  recipeName: {
    fontSize: 16,
    color: "gray",
  },

  // containerCategories: {
  //   marginTop: 20,
  //   gap: 50,
  //   padding: 10,
  //   marginBottom: 20,
  // },
  // category: {
  //   padding: 8,
  //   width: 70,
  //   height: 70,
  //   borderRadius: 100,
  //   overflow: "hidden",
  //   backgroundColor: "orange",
  // },
  // categoryImg: {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 100,
  // },
  // recipeName: {
  //   marginTop: 4,
  //   padding: 10,
  //   fontSize: 15,
  //   textAlign: "center",
  //   fontWeight: "400",
  // },
});
