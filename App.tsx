import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainStack  from './src/navigations';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
