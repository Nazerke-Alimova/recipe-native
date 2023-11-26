import {   StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const HomeNavBar = () => {
  return (
    <View style={styles.picture}>
      <Image
        style={styles.avatar}
        source={require("../../assets/images/avatar.png")}
      />
      <Icon name="notifications-outline" size={40}></Icon>
    </View>
  );
};
export default HomeNavBar;
const styles = StyleSheet.create({

    picture: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      avatar: {
        width: 50,
        height: 50,
      },
})