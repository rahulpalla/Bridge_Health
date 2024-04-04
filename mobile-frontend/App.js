import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NavBar from './components/NavBar'; // Import the NavBar component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{ title: "Login Screen" }}
        />
        <Stack.Screen
          name= "Home Screen"
          component={NavBar} // Render NavBar directly as a screen component
          options={{title: "Home Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
