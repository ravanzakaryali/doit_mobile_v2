export { default as AuthStack } from './stacks/Auth.stack';
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeTab from './tabs/Home.tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from '.';

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_left'
        }}>
            <Stack.Screen name='authstack' component={AuthStack} />
            <Stack.Screen name='hometab' component={HomeTab} />
        </Stack.Navigator>
    );
};

export default index;

const styles = StyleSheet.create({});
