import React from "react";
import { View, StyleSheet , Text} from "react-native";

const AdditionaRecipeDataCard = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.yellowDiv}>
      <View style={styles.iconDiv}>{icon}</View>
      <View style={styles.yellowTxt}>
        <Text style={styles.numberTxt}>{title}</Text>
        <Text style={styles.stringTxt}>{subtitle}</Text>
      </View>
    </View>
  );
};
export default AdditionaRecipeDataCard;

const styles = StyleSheet.create({
  yellowDiv: {
    height: 140,
    alignItems: "center",
    backgroundColor: "rgba(255, 191, 0, 0.9)",
    borderRadius: 90,
    justifyContent: "space-evenly",
    paddingHorizontal: 12,
  },
  iconDiv: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 90,
  },
  yellowTxt: {
    alignItems: "center",
  },
  numberTxt: {
    fontWeight: "800",
    fontSize: 18,
  },
  stringTxt: {
    fontWeight: "800",
    fontSize: 12,
  },
});
