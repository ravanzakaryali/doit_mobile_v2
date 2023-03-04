import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stacks/Home.stack";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="homestack" component={HomeStack} />
        </Tab.Navigator>
    );
};

export default HomeTab;