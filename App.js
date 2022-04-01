import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Map from "./screens/map";
import Signup from "./screens/Signup";
import Splash from "./screens/splash";
const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="SPlash"
            component={Splash}
            options={{
              headerShown:false
            }} />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: '#db1818',
                color: '#FFFCF9'
              },
              headerTintColor: '#FFFCF9',
              headerTitleAlign: 'center'
            }} />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackVisible: false
              ,
              headerStyle: {
                backgroundColor: '#db1818',
                color: '#FFFCF9'
              },
              headerTintColor: '#FFFCF9',
              headerTitleAlign: 'center'
            }} />

          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              headerBackVisible: true
              ,
              headerStyle: {
                backgroundColor: '#db1818',
                color: '#FFFCF9'
              },
              headerTintColor: '#FFFCF9',
              headerTitleAlign: 'center'
            }} />

            <Stack.Screen
            name="Registration"
            component={Signup}
            options={{
              headerStyle: {
                backgroundColor: '#db1818',
                color: '#FFFCF9'
              },
              headerTintColor: '#FFFCF9',
              headerTitleAlign: 'center'
            }} />

        </Stack.Navigator>

      </NavigationContainer>

    );
  }
}

export default App;