import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";
import store from "./redux/store";
import Counter from "./screens/Counter";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter/>
      </View>
    </Provider>
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
