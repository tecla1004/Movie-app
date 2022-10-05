import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { API_KEY, BASE_URL, TYPE } from "../services/api";

const TvScreen = ({ navigation }) => {
    const [tvShows, setTvShows] = useState([]);
    const tvType = ["popular", "on_the_air", "airing_today"];
  
    const fetchTvData = async (selectedItem) => {
      const url = `${BASE_URL}/tv/${selectedItem}?api_key=${API_KEY}`;
      const api_call = await fetch(url);
      const response = await api_call.json();
  
      let tvRows = createMovieRows(navigation, response.results, true);
      setTvShows(tvRows);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SelectDropdown
          data={tvType}
          onSelect={(selectedItem, index) => {
            fetchTvData(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
        />
        <ScrollView showsHorizontalScrollIndicator={false}>{tvShows}</ScrollView>
      </View>
    );
  }

  export default TvScreen