import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AIScreen from '../screens/AIScreen';
import InboxScreen from '../screens/InboxScreen';
import SettingScreen from '../screens/SettingsScreen';
import MessageScreen from '../screens/MessageScreen';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MessageFlow from './MessageFlow';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? require('../assets/homeIcon.png') : require('../assets/homeIcon.png');
          } else if (route.name === 'AIScreen') {
            iconName = focused ? require('../assets/aiIcon.png') : require('../assets/aiIcon.png');
          } else if (route.name === 'InboxScreen') {
            iconName = focused ? require('../assets/inboxIcon.png') : require('../assets/inboxIcon.png');
          } else if (route.name === 'SettingsScreen') {
            iconName = focused ? require('../assets/settingsIcon.png') : require('../assets/settingsIcon.png');
          }

          const tintColor = focused ? color : 'black'; 

          return <Image source={iconName} style={{ width: size, height: size, tintColor: tintColor, alignSelf: 'center' }} />;
        },
        tabBarLabel: ''
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, tabBarLabel: '' }} />
      <Tab.Screen name="AIScreen" component={AIScreen} options={{ headerShown: false, tabBarLabel: '' }} />
      <Tab.Screen name="InboxScreen" component={MessageFlow} options={{ headerShown: false, tabBarLabel: '' }} />
      <Tab.Screen name="SettingsScreen" component={SettingScreen} options={{ headerShown: false, tabBarLabel: '' }} />
    </Tab.Navigator>
  );
}

export default NavBar;
