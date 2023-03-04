import { Pressable, StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { NavigateTo } from "src/components";

type AuthHeader = {
    title: string,
    navigateTo: string,
}

const AuthHeader = ({ title, navigateTo }: AuthHeader) => {
    return (
        <View>
            <NavigateTo
                showUndeline
                textStyle={{
                    textAlign: 'right'
                }}
                title={title}
                navigateTo={navigateTo} />
        </View>
    );
};

export default AuthHeader;

