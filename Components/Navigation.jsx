import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./HomeScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen name="Home" component={HomeScreen} />
          /* <Stack.Screen name="Home" component={HomeScreen} /> */
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
