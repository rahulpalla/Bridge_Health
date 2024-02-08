import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AIScreen from '../screens/AIScreen';
import InboxScreen from '../screens/InboxScreen';
import SettingScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

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

          return <Image source={iconName} style={{ width: size, height: size, tintColor: tintColor }} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === 'HomeScreen') {
            label = 'Home Screen';
          } else if (route.name === 'AIScreen') {
            label = 'AI Screen';
          } else if (route.name === 'InboxScreen') {
            label = 'Inbox Screen';
          } else if (route.name === 'SettingsScreen') {
            label = 'Settings Screen';
          }

          return <Text style={{ color, fontSize: 11 }}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="AIScreen" component={AIScreen} options={{ headerShown: false }} />
      <Tab.Screen name="InboxScreen" component={InboxScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SettingsScreen" component={SettingScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default NavBar;
