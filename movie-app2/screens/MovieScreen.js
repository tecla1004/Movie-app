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

    
    //Listing Movie
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
            <View key={data[i].id}>
              <Image
                style={styles.movieImg}
                source={{
                  uri: data[i].poster_path,
                }}
              />
      
              <View>
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
                <View>
                  <Button title="More Details" />
                </View>
              </View>
            </View>
          );
        }
        return movieArry;
      }

      //Movie Datail
      function MovieDetail({ route, navigation }) {
        const [detail, setDetail] = useState({});
        const [loading, setLoading] = useState(true);
      
        if (loading) {
          return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>loading....</Text>
            </View>
          );
        } else {
          return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View>
                <Text style={{ fontWeight: "bold", paddingBottom: 40 }}>
                  {detail.title}
                </Text>
              </View>
              <Image
                style={styles.detailImg}
                source={{
                  uri: detail.image,
                }}
              />
              <View>
                <Text style={{ padding: 15, marginHorizontal: 10 }}>
                  {detail.desc}
                </Text>
              </View>
              <View>
                <Text>Popularity : {detail.popularity}</Text>
              </View>
              <View>
                <Text>Release_date : {detail.release_date}</Text>
              </View>
            </View>
          );
        }
      }
      
    //Fetching movie data 
    const fetchMovieData = async (sortType) => {
      let searchParam = "";
      switch (sortType) {
        case "popular":
          searchParam = "popular";
          break;
        case "now playing":
          searchParam = "now_playing";
          break;
        case "top rated":
          searchParam = "top_rated";
          break;
        case "upcoming":
          searchParam = "upcoming";
          break;
        default:
      }
  
      const url = `${BASE_URL}/movie/${searchParam}?api_key=${API_KEY}`;
      const api_call = await fetch(url);
      const response = await api_call.json();
  
      let movieLists = movieList(navigation, response.results, false);
      setMovies(movieLists);
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