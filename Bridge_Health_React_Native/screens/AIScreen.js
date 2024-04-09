import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AiCircle from '../components/AiCircle';
import SummaryIcon from '../components/SummaryIcon';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the hamburger menu icon

const AIScreen = () => {
  return (
    <LinearGradient colors={['#8CBBC4', '#354CAF', '#25336C']} style={styles.container}>
      {/* Icon */}
      <View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="bars" size={24} color="white" weight="thin" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.meetText}>Meet your AI assistant</Text>
      <Text style={styles.insightsText}>Gain insights about your health!</Text>
      <View style={styles.circle}><AiCircle/></View>
      <View style={styles.summaryContainer}>
        <SummaryIcon/>
        <Text style={styles.summaryText}>This week’s summary</Text>
      </View>
      <Text style={styles.date}>Jan 14 - Jan 20 2024</Text>
      
      {/* <View style={styles.pillContainer}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Pill 1</Text>
        </View>
      </View> */}

      {/* <TouchableOpacity style={styles.learnMoreButton}>
        <Text style={styles.learnMoreButtonText}>Learn More</Text>
      </TouchableOpacity> */}
    </LinearGradient>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 10,
  },
  date: {
    color: '#B4B4B4',
    textAlign: 'center',
    // fontFamily: 'Gilroy-Regular',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19, // specify line height directly in pixels
    letterSpacing: 0.2, // specify letter spacing directly in pixels
  },
  summaryText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 5,
  },
  summaryContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
  },
  meetText: {
    marginTop: 60,
    color: '#FFF',
    marginTop: 80,
    marginLeft: 30,
    marginRight: 60,
    textAlign: 'left',
    fontSize: 20,
  },
  insightsText: {
    color: '#FFF',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 60,
    textAlign: 'left',
    fontSize: 38,
    fontWeight: 'bold',
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: '#354CAF',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 40,
  },
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  pill: {
    width: width * 0.9,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  pillText: {
    color: 'white',
    fontSize: 16,
  },
  learnMoreButton: {
    backgroundColor: '#354CAF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  learnMoreButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default AIScreen;
