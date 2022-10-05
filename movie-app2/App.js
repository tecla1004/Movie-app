import { useState } from "react";
import {  StyleSheet,  ScrollView,  Text,  View,  Button,  Image,  TextInput} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {API_KEY, BASE_URL, TYPE} from "./services/api"
import TabScreen from './components/TabScreen'



const Stack = createNativeStackNavigator();


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

//Main
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movie App" component={TabScreen} />
        <Stack.Screen name="Detail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

