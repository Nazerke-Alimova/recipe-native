import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const HomeTextBlock = () => {
  return (
    <View style={styles.textBlock}>
      <Text style={styles.subtitle}>Hello, Noman!</Text>
      <Text style={styles.text}>
        Make your own food, stay at <Text style={styles.span}>home</Text>
      </Text>
    </View>
  );
};

export default HomeTextBlock;
const styles = StyleSheet.create({
    textBlock: {
        marginTop: 10,
      },
      subtitle: {
        color: "grey",
      },
      text: {
        top: 10,
        width: "90%",
        fontStyle: "normal",
        fontSize: 35,
        fontWeight: "700",
      },
      span: {
        color: "orange",
      },
})
