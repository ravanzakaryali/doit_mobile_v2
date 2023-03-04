import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from '../styles';
import { Input } from "src/components/Input";
import { Button } from "src/components";
import Countdown from "src/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "src/themes";
import AuthHeader from "../components/Header";
import { AppDispatch, StoreType } from "src/store";
import { confirmThunk } from "src/store/thunks/auth.thunks";


interface ConfirmForm {
    code: string,
    email: string
}

const Confirm = ({ navigation }: any) => {
    const dispatch = useDispatch<AppDispatch>();

    const { control, register, handleSubmit, reset, formState: { errors } } = useForm<ConfirmForm>({
        defaultValues: {
            code: ""
        },

    });
    const state = useSelector((state: StoreType) => state.authStore);

    const onSubmit = (data: ConfirmForm) => {
        data.email = state.user.email;
        dispatch(confirmThunk(data)).then((res) => {
            reset();
            if (state.loading == "fullfied") {
                navigation.navigate('hometab')
            }
        });
    }
    return (
        <View style={styles.container}>
            <AuthHeader title="Go back Log In" navigateTo="login" />
            <View style={styles.center}>
                <Text style={styles.titleText}>
                    Confirm Code
                </Text>
                <Text style={styles.textView}>Confirm code <Text style={{
                    fontWeight: '800'
                }}>{state.user.email}</Text>: <Text style={{
                    color: colors.primary,
                    fontWeight: '500'
                }}>{Countdown(5)}</Text></Text>
                <View style={styles.inputView}>
                    <Controller

                        control={control}
                        rules={{
                            required: true,
                            maxLength: 6,
                            minLength: 6
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                error={errors.code && 'This is confirm code'}
                                autoCapitalize="none"
                                onChangeText={onChange}
                                autoFocus={true}
                                placeholder="Email"
                                value={value}
                                keyboardType="numeric"
                                style={styles.inputStyle}
                                label="Your code" />
                        )}
                        name="code"
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button loading={state.loading == "pending"} onPress={handleSubmit(onSubmit)} style={styles.buttonStyle} label="Submit" />
                </View>
            </View>
        </View>
    );
};

export default Confirm;
