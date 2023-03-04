import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from '../styles';
import { Controller, useForm } from "react-hook-form";
import AuthHeader from "../components/Header";
import { Input } from "src/components/Input";
import { Button } from "src/components";

interface RegisterForm {
  email: string,
  fullName: string
}

const Index = () => {
  const { control, register, handleSubmit,reset, formState: { errors } } = useForm<RegisterForm>({
    defaultValues: {
      email: '',
      fullName: ''
    },

  });
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    reset();
  }
  return (
    <View style={styles.container}>
      <AuthHeader title="Have Account? Log in" navigateTo="login"/>
      <View style={styles.center}>
        <Text style={styles.titleText}>
          Register
        </Text>
        <Text style={styles.textView}>Sing up to continue?</Text>
        <View style={styles.inputView}>
          <Controller

            control={control}
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
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
          <Controller

            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                error={errors.email && 'This is fullname'}
                autoCapitalize="none"
                onChangeText={onChange}
                autoComplete="name"
                placeholder="Full name"
                value={value}
                style={styles.inputStyle}
                label="Full name" />
            )}
            name="fullName"
          />
        </View>
        <View style={styles.buttonView}>
          <Button onPress={handleSubmit(onSubmit)}  style={styles.buttonStyle} label="Continue" />
        </View>
      </View>
    </View>
  );
};

export default Index;

