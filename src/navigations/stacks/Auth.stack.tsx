import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen, ConfirmScreen } from 'src/screens/';

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "slide_from_right"
        }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="confirm" component={ConfirmScreen} />
        </Stack.Navigator>
    );
};

export default Auth;

const styles = StyleSheet.create({});
