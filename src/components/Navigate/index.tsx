import { Text, TextStyle, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import style from './styles';

type NavigateToType = {
    title: string,
    navigateTo: string,
    textStyle?: TextStyle,
    showUndeline?: boolean,
    pressableStyle?: StyleProp<ViewStyle>
}

const NavigateTo = (props: NavigateToType) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity style={props.pressableStyle} onPress={() => navigation.navigate(props.navigateTo)}>
            <Text style={{
                ...style.textStyle, ...{
                    textDecorationLine: props.showUndeline ? 'underline' : 'none'
                }, ...props.textStyle
            }}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default NavigateTo;

