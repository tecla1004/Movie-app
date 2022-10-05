import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { API_KEY, BASE_URL, TYPE } from "../services/api";

const SearchScreen = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [inputQuery, setInputQuery] = useState("");
    const searchType = ["movie", "multi", "tv"];
    var selectedSearch = "movie";
  
    const fetchSearch = async () => {
      const url = `${BASE_URL}/search/${selectedSearch}?query=${inputQuery}&api_key=${API_KEY}`;
      const api_call = await fetch(url);
      const response = await api_call.json();
  
      let rows = createMovieRows(navigation, response.results, false);
      setSearchResults(rows);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text>Search movie/TV show name</Text>
        </View>
        <TextInput
          style= {{
            width:"70%",
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}}
          placeholder="i.e. james bond, CSI"
          onChangeText={setInputQuery}
        />
        <View>
          <Text>Choose search type</Text>
        </View>
        <SelectDropdown
          data={searchType}
          onSelect={(selectedItem, index) => {
            selectedSearch = selectedItem;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
        />
        <View
          style={{
            backgroundColor: "lightblue",
           
            padding: 5,
            width: 150,
            height: 50,
            fontSize: 12,
            borderRadius: 5,
          }}
        >
          <Button 
            style={{
                color:"white",
            }}
            title="Search" onPress={() => fetchSearch()} />
          <Text
            style={{
                paddingTop:20,
                width:"120%",
            }}
          >Plese select a search types</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {searchResults}
        </ScrollView>
      </View>
    );
  }
  
  export default SearchScreen