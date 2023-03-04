import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import AuthHeader from "../components/Header";
import { Button } from "src";
import { Input } from "src/components/Input";
import { useForm, Controller } from "react-hook-form";
import styles from '../styles';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "src/store";
import { loginThunk } from "src/store/thunks/auth.thunks";

interface LoginForm {
  email: string
}

const Index = ({ navigation }: any) => {

  const dispacth = useDispatch<AppDispatch>();
  const state = useSelector((state: StoreType) => state.authStore);

  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm>({
    defaultValues: {
      email: ''
    },

  });
  const onSubmit = (data: LoginForm) => {
    dispacth(loginThunk(data)).then(res => {
      reset();
    });
  }

  useEffect(() => {
    if (state.loading == "fullfied") {
      navigation.navigate('confirm')
    }
  }, [state.loading])

  return (
    <View style={styles.container}>
      <AuthHeader title="Create a Account" navigateTo="register" />
      <View style={styles.center}>
        <Text style={styles.titleText}>
          Login In
        </Text>
        <Text style={styles.textView}>What's your email?</Text>
        <View style={styles.inputView}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                labelShow
                error={errors.email && 'This is email'}
                autoCapitalize="none"
                onChangeText={onChange}
                autoFocus={true}
                keyboardType="email-address"
                autoComplete="email"
                placeholder="Email"
                value={value}
                style={styles.inputStyle}
                label="Your email" />
            )}
            name="email"
          />
        </View>
        <View style={styles.buttonView}>
          <Button loading={state.loading == "pending"} onPress={handleSubmit(onSubmit)} style={styles.buttonStyle} label="Continue" />
        </View>
      </View>
    </View>
  );
};

export default Index;

