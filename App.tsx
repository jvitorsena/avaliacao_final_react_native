/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
// import Home from "./src/components/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Vendas from "./src/components/venda";
// import Cadastro from "./src/components/cadastro";
import Home from "./src/components/tela";
import segundaTela from "./src/components/segundaTela";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="segundaTela" component={segundaTela} />
        {/* <Stack.Screen name="Cadastro" component={Cadastro} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <ScrollView showsVerticalScrollIndicator={false}>
    // </ScrollView>
  );
}