import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {API_KEY, BASE_URL, TYPE} from "./services/api"
import TabScreen from './components/TabScreen'
import MovieScreen from "./screens/MovieScreen";


const Stack = createNativeStackNavigator();


//Main
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movie App" component={TabScreen} />
        <Stack.Screen name="Detail" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

