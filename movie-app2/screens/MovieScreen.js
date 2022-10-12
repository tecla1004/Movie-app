import { useState, useEffect } from "react";
import { ScrollView,  Text,  View,  Button,  Image  } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import SelectDropdown from "react-native-select-dropdown";
import {getData} from "../services/api";
import axios from 'axios'
import { Card } from "@rneui/themed";

const  MovieScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const movieType = ["now_playing", "popular", "top_rated", "upcoming"];//options
    const [selected, setSelected] = useState("now_playing");
    const [isLoading, setIsLoading] = useState(true);
    const [tabMenu, setTabMenu] = useState('movie');
    const [options, setOptions] = useState();


   const url = `https://api.themoviedb.org/3/movie/${selected}?api_key=25dba219522a21ae2d451aa3e7779dd8` 


  
   useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setMovies(json))
    .catch((error)=>console.error(error))
    .finally(()=>setIsLoading(false));
   },[selected])
  
   console.log(movies)
    console.log(selected)
   //unhandled error
  // useEffect(()=>{
  //   if(movies) {
  //     const getMovies = async() => {
  //       const response = await getData(`movie/${selected}`)
  //       setMovies(response.results);
  //     };
  //     getMovies();
  //   }
  //   setIsLoading(false)
  // },[selected])
  //   //Fetching movie data 
  //   const fetchMovieData = async = () => {
  //     setIsLoading(true);
  //     console.log('fetching data');
  //     if (tabMenu === 'movie') {
  //     }
  //     else {
  //         getData(tabMenu, options)
  //         .then(response => {
  //             setData(response);
  //     })
  //     .then(() => setIsLoading(false))
  //     .catch(error => console.log(error));

  //     }
  //   }

  //   useEffect(() => {
  //     if(tabMenu != 'search')
  //     fetchMovieData();
  // },[options, ' ']);

//  useEffect(() =>  {
//     getDataFromAPI()
// },[])
  
  // const dataResponse = async()=>{
  //   const response = await newAPI.get(`baseUrl/movie/${selected}/api_key`)
  //   console.log(response.data)
  // }

  // function getDataFromAPI(){
  //   newAPI.get(`baseUrl/movie/${selected}/api_key`)
  //   .then(function(response){
  //     console.log(response.data)
  //   })
  //   .catch(function(error){
  //     console.log(error)
  //   })
  // }
  //selected movie type by user 
  // const handleSelect = (options) => {
  //   setOptions(options);

  // }
    // //Listing Movie
     return (
      <View>
        <ScrollView>
          <SelectList
            data={movieType}
            setSelected={setSelected}
           
            />
   
       {movies.results?.map((item, index)=>{
        return (
          <Card>
          <View key={index}>
            <Text>{item.title}</Text>
            <Image source={{uri:item.poster_path}}></Image>
            <Text>{item.popularity}</Text>
          </View>
          </Card>
        )
        })
        }
       </ScrollView>
      </View>
     )
    // function movieList(navigation, tabMenu, opions) {
    //     var movieArry = [];
      
    //     for (let i = 0; i < data.length; i++) {
    //       var title = "";
    //       var releaseDate = "";
    //       if (tabMenu === '') {
    //         title = data[i].name;
    //         releaseDate = data[i].first_air_date;
    //       } else {
    //         title = data[i].title;
    //         releaseDate = data[i].release_date;
    //       }
    //       movieArry.push(
    //         <View key={data[i].id}>
    //           <Image
    //             style={styles.movieImg}
    //             source={{
    //               uri: data[i].poster_path,
    //             }}
    //           />
      
    //           <View>
    //             <View>
    //               <Text style={styles.title}>{title}</Text>
    //             </View>
    //             <View>
    //               <Text style={{ fontSize: 12 }}>
    //                 Popularity : {data[i].popularity}
    //               </Text>
    //             </View>
    //             <View>
    //               <Text style={{ fontSize: 12 }}>Release_date : {releaseDate}</Text>
    //             </View>
    //             <View>
    //               <Button title="More Details" />
    //             </View>
    //           </View>
    //         </View>
    //       );
    //     }
    //     return movieArry;
     }

      // //Movie Datail
      // function MovieDetail({ route, navigation }) {
      //   const [detail, setDetail] = useState({});
      //   const [loading, setLoading] = useState(true);
      
      //   if (loading) {
      //     return (
      //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //         <Text>loading....</Text>
      //       </View>
      //     );
      //   } else {
      //     return (
      //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //         <View>
      //           <Text style={{ fontWeight: "bold", paddingBottom: 40 }}>
      //             {detail.title}
      //           </Text>
      //         </View>
      //         <Image
      //           style={styles.detailImg}
      //           source={{
      //             uri: detail.image,
      //           }}
      //         />
      //         <View>
      //           <Text style={{ padding: 15, marginHorizontal: 10 }}>
      //             {detail.desc}
      //           </Text>
      //         </View>
      //         <View>
      //           <Text>Popularity : {detail.popularity}</Text>
      //         </View>
      //         <View>
      //           <Text>Release_date : {detail.release_date}</Text>
      //         </View>
      //       </View>
      //     );
      //   }
      // }
      
    
  
    //   const url = `${BASE_URL}/movie/${searchParam}?api_key=${API_KEY}`;
    //   const api_call = await fetch(url);
    //   const response = await api_call.json();
  
    //   let movieLists = movieList(navigation, response.results, false);
    //   setMovies(movieLists);
    // };
 
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <SelectDropdown
    //       data={movieType}
    //       onSelect={(selectedItem, index) => {
    //        console.log(selectedItem)
    //       }}
    //       buttonTextAfterSelection={(selectedItem, index) => {
    //         return selectedItem;
    //       }}
    //     />
    //     <ScrollView showsHorizontalScrollIndicator={false}>{movies}</ScrollView>
    //   </View>
    // );
    // }

  export default MovieScreen;