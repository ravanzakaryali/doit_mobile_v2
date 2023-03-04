import { StyleSheet, Text, TextInput, TextStyle, View, TextInputProps } from "react-native";
import React from "react";
interface InputProps extends TextInputProps {
    labelShow?: boolean,
    label?: string,
    labelStyle?: TextStyle,
    error?: string | null
}

export const Input = ({ labelStyle, labelShow = true, error = null, label = "Input label", ...props }: InputProps) => {
    return (
        <>
            {labelShow ?
                <View style={labelStyle}><Text>{label}</Text></View>
                : null
            }
            <TextInput
                style={{
                    borderBottomColor: !error ? 'red' : 'black'
                }}
                {...props}
            />
            <Text style={{
                color: 'red'
            }}>{error}</Text>
        </>
    );
};


