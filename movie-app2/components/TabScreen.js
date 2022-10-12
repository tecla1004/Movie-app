import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import MovieScreen from '../screens/MovieScreen'
import SearchScreen from '../screens/SearchScreen'
import TvScreen from '../screens/TvScreen'
import Details from "../screens/Details";

const Nav  = createMaterialTopTabNavigator();
export default function TabScreen  () {
   
    return (
        <Nav.Navigator>
          <Nav.Screen name="Movies" component={MovieScreen} />
          <Nav.Screen name="Search Results" component={SearchScreen} />
          <Nav.Screen name="TV Shows" component={TvScreen} />
        </Nav.Navigator>
      );
  
}
