import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps, TextStyle, ActivityIndicator } from "react-native";
import styles from "./styles";
import { colors, fontSizes } from "src/themes";

interface ButtonProps extends TouchableOpacityProps {
    label: string,
    style?: TextStyle,
    loading?: boolean
}

export const LoadingButton = ({ label, style, loading = false, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity disabled={loading} style={[loading ? styles.buttonDis : styles.button, style]} {...props}>
            {
                loading ?
                    <ActivityIndicator animating={loading} color={colors.white} size={fontSizes.xlarge} />
                    :
                    <Text style={[styles.label, style]}>{label}</Text>
            }
        </TouchableOpacity >
    );
};


