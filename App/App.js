import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import API_Screen_01 from "./screens/API_Screen_01";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import API_Screen_02 from "./screens/API_Screen_02";
import {useState} from "react";
import API_Screen_03 from "./screens/API_Screen_03";
import Master_Portrait from "./screens/Master_Portrait";
import Detail_Portrait from "./screens/Detail_Portrait";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Master">
          <Stack.Screen name="Master" component={Master_Portrait}
                        options={{
                            headerShown:false
                        }}
          ></Stack.Screen>
          <Stack.Screen name="Detail_Portrait" component={Detail_Portrait}/>
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
