import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Modal, Pressable } from 'react-native';
import { useState, useEffect } from "react";
import styles from "../styles/styles";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg, { Circle, G, LinearGradient, RadialGradient, Stop } from 'react-native-svg';
import ProgressCircle from 'react-native-progress-circle';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// import Animated from 'react-native-reanimated';

const HomeScreen = () => {

  const [deviceConnected, setDeviceConnected] = useState("Device Connected");
  const [noteModal, setNoteModal] = useState(false);


  // const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5"}}>
      <ScrollView style={{width: "100%",}}>
        <View style={{flexGrow: 1}}>
          <Text style={styles.titleText}>Hello, Shvetan</Text>
          <Text style={styles.deviceConnectText}>{deviceConnected}</Text>
            <View style = {{alignItems: "center"}}>
              <Svg style={{ position: 'absolute', width: 400, height: 400 }}>
                <RadialGradient
                  id="backgroundGradient"
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                >
                  <Stop offset="100%" stopColor="#F5F5F5" />
                  <Stop offset="0%" stopColor="#1B7593" />
                </RadialGradient>
                {/* #BBD2Ec */}
                <Circle
                  cx="50%"  // Center X
                  cy="50%"  // Center Y
                  r="45%"   // Radius as a percentage of the containing view
                  stroke='#303858'
                  strokeWidth={0}
                  fill="url(#backgroundGradient)" // Use the gradient as the fill
                />
              </Svg>
              <View style={{marginTop: 70}}>
                <ProgressCircle
                  percent={90}
                  radius={130}
                  borderWidth={20}
                  color="#02C697"
                  shadowColor="#fff"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 70, fontWeight: 700, alignSelf: "center", fontFamily: "Avenir" }}>{'90'}</Text>
                  <Text style={{ fontSize: 40, fontWeight: 600, alignSelf: "center", fontFamily: "Avenir", marginTop: -20 }}>{'mg/dl'}</Text>
                </ProgressCircle>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -80}}>
              <View>
                <Text style={styles.homeStatsLeft}>72</Text>
                <Text style={{fontSize: 12, color: "gray", marginLeft: 50, marginTop: -70 }}>HEART RATE</Text>
              </View>
              <View >
                <Text style={styles.homeStatsRight}>80</Text>
                <Text style={{fontSize: 12, color: "gray", marginLeft: 125, marginTop: -70 }}>DIA mm/hg</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Svg style={{position: 'absolute', width: 200, height: 200, marginTop: -95, zIndex: 1}}>
                <RadialGradient
                  id="backgroundGradient"
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                >
                  <Stop offset="100%" stopColor="#F5F5F5" />
                  <Stop offset="0%" stopColor="#1B7593" />
                </RadialGradient>
                <Circle
                  cx="50%"  // Center X
                  cy="50%"  // Center Y
                  r="30%"   // Radius as a percentage of the containing view
                  stroke='#303858'
                  strokeWidth={0}
                  fill="url(#backgroundGradient)" // Use the gradient as the fill
                />
              </Svg>
              <TouchableOpacity 
                style={styles.newNoteButton}
                onPress={() => setNoteModal(!noteModal)}
              >
                <View style={styles.circle}></View>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size={58}
                  color='#018767'
                />
              </TouchableOpacity>
              <View style={{backgroundColor: 'white', width: "100%", height: "100%", marginTop: -20}}>
                <Text style={{color: 'gray', alignSelf: 'center', marginTop: 50, fontSize: 12 }}>NOTE</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Modal
        animationType="fade"
        transparent={true}
        visible={noteModal}
        onRequestClose={() => {
          setNoteModal(!noteModal);
        }}
      >
        <View style={styles.topFillerView} />
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { width: "80%" }]}>
            <Text
              style={{
                fontSize: 25,
                color: "black",
                paddingHorizontal: 15,
                paddingVertical: 8,
                fontWeight: "600",
              }}
            >
              Add Note
              </Text>
            <Pressable
              style={[
                {
                  backgroundColor: '#018767',
                  marginTop: 20,
                  borderRadius: 10,
                },
              ]}
              onPress={() => setNoteModal(!noteModal)}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  fontWeight: "600",
                }}
              >
                Submit
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;