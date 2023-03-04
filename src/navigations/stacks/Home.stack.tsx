import { View, Text } from "react-native";
import React from "react";
import HomeScreen from 'src/screens/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
        }}>
            <Stack.Screen name="home" component={HomeScreen}/>
        </Stack.Navigator>
    );
};

export default HomeStack;

