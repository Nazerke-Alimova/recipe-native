import { StyleSheet, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenNavigation from "./HomeScreenNavigation";
import FavoritesSreen from "./FavoritesScreenNavigation";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../assets/constants/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: colors.amber800,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color }) => {
            return <Entypo name="bowl" color={color} size={25} />;
          },
        }}
        component={HomeScreenNavigation}
      />
      <Tab.Screen
        name="FavoritesTab"
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="heart" color={color} size={25} />;
          },
        }}
        component={FavoritesSreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;

const style = StyleSheet.create({});
