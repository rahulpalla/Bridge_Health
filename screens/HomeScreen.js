import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import DayBarGraph from '../components/DayBarGraph'; // Import the DayBarGraph component

const HomeScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity set to 0
  const [name, setName] = useState('Batman'); // Default name

  useEffect(() => {
    // Fade in animation when component mounts
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: true, // Use native driver for better performance
      }
    ).start();
  }, [fadeAnim]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ position: 'absolute', top: 60, left: 30 }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.helloText}>Hello, {name}</Text>
          <Text style={styles.deviceStatus}>Device Connected</Text>
        </Animated.View>
      </View>
      <View style={{ position: 'absolute', top: 500, left: 30 }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.title}>Glucose Summary</Text>
          <DayBarGraph style={styles.dayBarGraphStyles}></DayBarGraph>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  deviceStatus: {
    fontSize: 15,
    fontFamily: 'Avenir',
    color: '#22CA07',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  dayBarGraphStyles:{
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default HomeScreen;
