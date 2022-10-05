import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { API_KEY, BASE_URL, TYPE } from "../services/api";




const  MovieScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const movieType = ["popular", "now playing", "top rated", "upcoming"];

    
    function movieList(navigation, data, forTv) {
        var movieArry = [];
      
        for (let i = 0; i < data.length; i++) {
          var title = "";
          var releaseDate = "";
          if (forTv) {
            title = data[i].name;
            releaseDate = data[i].first_air_date;
          } else {
            title = data[i].title;
            releaseDate = data[i].release_date;
          }
          movieArry.push(
            <View style={{ padding: 10, flexDirection: "row" }} key={data[i].id}>
              <Image
                style={styles.movieImg}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + data[i].poster_path,
                }}
              />
      
              <View style={{ flexDirection: "column" }}>
                <View>
                  <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>
                    Popularity : {data[i].popularity}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Release_date : {releaseDate}</Text>
                </View>
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
                    title="More Details"
                    onPress={() =>
                      navigation.navigate("Detail", {
                        movieID: data[i].id,
                        forTv: forTv,
                      })
                    }
                  />
                </View>
              </View>
            </View>
          );
        }
        return movieArry;
      }
    const fetchMovieData = async (sortType) => {
      let urlSearchParam = "";
      switch (sortType) {
        case "popular":
          urlSearchParam = "popular";
          break;
        case "now playing":
          urlSearchParam = "now_playing";
          break;
        case "top rated":
          urlSearchParam = "top_rated";
          break;
        case "upcoming":
          urlSearchParam = "upcoming";
          break;
        default:
      }
  
      const url = `${BASE_URL}/movie/${urlSearchParam}?api_key=${API_KEY}`;
      const api_call = await fetch(url);
      const response = await api_call.json();
  
      let movieRows = movieList(navigation, response.results, false);
      setMovies(movieRows);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SelectDropdown
          data={movieType}
          onSelect={(selectedItem, index) => {
            fetchMovieData(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
        />
        <ScrollView showsHorizontalScrollIndicator={false}>{movies}</ScrollView>
      </View>
    );
  }

  export default MovieScreen;