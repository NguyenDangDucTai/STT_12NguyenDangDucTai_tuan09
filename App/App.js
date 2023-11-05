import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import API_Screen_01 from "./screens/API_Screen_01";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import API_Screen_02 from "./screens/API_Screen_02";
import {useState} from "react";
import API_Screen_03 from "./screens/API_Screen_03";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={API_Screen_01}/>
          <Stack.Screen name="Screen_02" component={API_Screen_02}
                        options={{
                            headerShown:false
                        }}
          />
          <Stack.Screen name="Screen_03" component={API_Screen_03}
                        options={{
                            headerShown:false,
                        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
