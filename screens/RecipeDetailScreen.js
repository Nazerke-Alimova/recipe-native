import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getDetails } from "../lib/getDetails";
import { useEffect, useState } from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import LeftIcon from "react-native-vector-icons/Entypo";
import HeartIcon from "react-native-vector-icons/AntDesign";
import ClockIcons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import UserFriends from "react-native-vector-icons/FontAwesome5";
import FireIcon from "react-native-vector-icons/FontAwesome5";
import BookIcon from "react-native-vector-icons/Octicons";
import AdditionaRecipeDataCard from "../components/AdditionaRecipeDataCard/AdditionaRecipeDataCard";
import Ingredients from "../components/Ingredients/Ingredients";
const additionalData = [
  {
    title: "35",
    subtitle: "Mins",
    icon: (
      <ClockIcons
        name="clockcircleo"
        size={30}
        strokeWidth={2.5}
        color="#525252"
      />
    ),
  },
  {
    title: "03",
    subtitle: "Servings",
    icon: (
      <UserFriends
        name="user-friends"
        size={30}
        strokeWidth={2.5}
        color="#525252"
      />
    ),
  },
  {
    title: "103",
    subtitle: "Call",
    icon: <FireIcon name="fire" size={30} strokeWidth={2.5} color="#525252" />,
  },
  {
    title: "",
    subtitle: "Easy",
    icon: <BookIcon name="stack" size={30} strokeWidth={2.5} color="#525252" />,
  },
];

const RecipeDetailScreen = ({ route }) => {
  const [detail, setDetail] = useState([]);
  //console.log(route);
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getDetails(route.params.id);
      console.log("details: ", res);
      setDetail(res);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style={"light"} />
      <View style={styles.detailContainer}>
        {detail &&
          detail.map((detail, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.detailcards}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("RecipeDetail", { id: detail.idMeal })
                }
              >
                {/* picture */}
                <View style={styles.imgblock}>
                  <Image
                    style={styles.detailImg}
                    source={{ uri: detail.strMealThumb }}
                  />
                </View>
                {/* иконки сверху */}
                <Animated.View
                  entering={FadeIn.delay(200).duration(1000)}
                  style={styles.butoonIcons}
                >
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backIcon}
                  >
                    <LeftIcon
                      name="chevron-left"
                      size={25}
                      strokeWidth={45}
                      color="#fbbf24"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsFavourite(!isFavourite)}
                    style={styles.heartIcon}
                  >
                    <HeartIcon
                      name="heart"
                      size={25}
                      strokeWidth={45}
                      color={isFavourite ? "red" : "#fbbf24"}
                    />
                  </TouchableOpacity>
                </Animated.View>
                {/* Название ингр */}
                <Animated.View
                  entering={FadeInDown.duration(700).springify().damping(12)}
                  className="space-y-2"
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      flex: 1,
                      color: "black",
                    }}
                  >
                    {detail.strMeal}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "medium",
                      flex: 1,
                      color: "gray",
                    }}
                  >
                    {detail.strArea}
                  </Text>
                </Animated.View>
                {/* Отзывы иконки */}

                <ScrollView
                  horizontal
                  contentContainerStyle={styles.additionalDataContent}
                >
                  {additionalData.map((data, index) => {
                    return <AdditionaRecipeDataCard key={index} {...data} />;
                  })}
                </ScrollView>
                <Ingredients detail={detail} />
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
    marginVertical: 10,
    // alignItems:'center'
  },
  imgblock: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  detailImg: {
    width: "100%",
    height: 240,
    borderRadius: 25,
    marginBottom: 10,
  },
  butoonIcons: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
  },
  backIcon: {
    padding: 5,
    borderRadius: 999,
    marginLeft: 5,
    backgroundColor: "white",
  },
  heartIcon: {
    padding: 5,
    borderRadius: 999,
    marginRight: 5,
    backgroundColor: "white",
  },
  yellowDiv: {
    // width:"25%",
    flexDirection: "column",
    justifyContent: "center",
    // borderRadius: 999,
    backgroundColor: "#fbbf24",
    // padding: 5,
  },
  iconDiv: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  yellowTxt: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 2,
    justifyContent: "space-between",
  },
  numberTxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#525252",
  },
  stringTxt: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#525252",
  },
  additionalDataContent: {
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 20,
  },
});
