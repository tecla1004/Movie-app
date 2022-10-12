import { useState, useEffect } from "react";
import { ScrollView,  Text,  View,  Button,  Image, TouchableOpacity  } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {getData} from "../services/api";
import { Card } from "@rneui/themed";
import Details from "./Details";


function  TvScreen () {
    const [tvShow, setTvShow] = useState([]);
    const tvType = ["popular", "on_the_air", "airing_today"];//options
    const [selected, setSelected] = useState("popular");
    const [isLoading, setIsLoading] = useState(true);
    // const [tabMenu, setTabMenu] = useState('movie');
    // const [options, setOptions] = useState();


   const url = `https://api.themoviedb.org/3/tv/${selected}?api_key=25dba219522a21ae2d451aa3e7779dd8` 


  
   useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setTvShow(json))
    .catch((error)=>console.error(error))
    .finally(()=>setIsLoading(false));
   },[selected])
  
   console.log(tvShow)
    console.log(selected)
   


     return (
      <View>
        <ScrollView>
          <SelectList
            data={tvType}
            setSelected={setSelected}
           
            />
   
       {tvShow.results?.map((item, index)=>{
         return (
          <Card>
          <View key={index}
          style={{
            flexDirection:'row'
          }} >
            <View>
              <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                style={{
                  width:100,
                  height:100
                }}
              
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight:'bold'
                }}
              >{item.original_name}</Text>
              <Text>Popularity:{item.popularity}</Text>
              <Text>Release Date:{item.release_date}</Text>
              <TouchableOpacity 
              style={{
                alignItems:"center",
                padding:10,
                backgroundColor:'skyblue'
              }}>
                <Text>More Detail</Text>
              </TouchableOpacity>       
            
            </View>
            
          </View>
          </Card>
        )
        })
        }
       </ScrollView>
      </View>
     )
}


const Stack = createNativeStackNavigator();

function Screens () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  export default TvScreen;