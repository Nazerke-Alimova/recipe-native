import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { updateActivityCategory } from "../../store/categoriesSlice";
import { useDispatch } from "react-redux";

const Category = ({ name, thumbnail, isActive }) => {
  const dispatch = useDispatch();
  const activeButtonStyle = isActive
    ? styles.activeButton
    : styles.inactiveButton;
  const onPress = () => {
    dispatch(updateActivityCategory(name));
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
      <View style={activeButtonStyle}>
        <Image style={styles.categoryImg} source={{ uri: thumbnail }} />
      </View>

      <Text style={styles.recipeName}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Category;

const styles = StyleSheet.create({
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
  categoryButton: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 4,
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
});
