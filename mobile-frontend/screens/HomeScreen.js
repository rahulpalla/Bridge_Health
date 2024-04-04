import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Modal, Pressable } from 'react-native';
import { useState, useEffect } from "react";
import styles from "../styles/styles";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg, { Circle, G, LinearGradient, RadialGradient, Stop } from 'react-native-svg';
import ProgressCircle from 'react-native-progress-circle';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import WeekBarGraph from '../components/WeekBarGraph';
import DayBarGraph from '../components/DayBarGraph';
import GraphDropdown from '../components/GraphDropdown';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
// import TimeInput from '@tighten/react-native-time-input';

const HomeScreen = () => {

  const [deviceConnected, setDeviceConnected] = useState("Device Connected");
  const [noteModal, setNoteModal] = useState(false);
  const [name, setName] = useState('Shvetan'); 
  const [optionPicked, setOptionPicked] = useState('Select');
  const [time, setTime] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5"}}>
      <ScrollView style={{paddingBottom: 20}}>
        <View style={{flexGrow: 1}}>
          <Text style={styles.titleText}>Hello, {name}</Text>
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
              <Text style={{fontSize: 12, color: "gray", marginLeft: 55, marginTop: -60 }}>HEART RATE</Text>
            </View>
            <View >
              <Text style={styles.homeStatsRight}>80</Text>
              <Text style={{fontSize: 12, color: "gray", marginLeft: 125, marginTop: -60 }}>DIA mm/hg</Text>
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
            <View style={{backgroundColor: 'white', width: "100%", height: "100%", marginTop: -35, paddingBottom: 90}}>
              <Text style={{color: 'gray', alignSelf: 'center', marginTop: 70, fontSize: 12 }}>NOTE</Text>
              <View style={{flexDirection: 'row', height: "4%", justifyContent: 'center', marginTop: 115}}>
                <Text style={styles.titleGlucoseSummary}>Glucose Summary</Text>
                <MenuProvider style={{width: "70%", marginLeft: 30}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 15, borderColor: 'gray'}}>
                    <Menu>
                      <MenuTrigger style={{triggerTouchable: {underlayColor: 'transparent'}, alignItems: 'center'}}>
                        <Text style={{fontWeight: '500', fontSize: 15, paddingVertical: 7, paddingHorizontal: "30%", color: 'gray'}}>{optionPicked}</Text>
                      </MenuTrigger>
                      <MenuOptions style={{alignItems: 'center', padding: 8, width: "100%"}}>
                        <MenuOption onSelect={() => setOptionPicked("Day")} text='Day' style={{paddingHorizontal: 60}}/>
                        <MenuOption onSelect={() => setOptionPicked("Week")} text='Week' style={{paddingHorizontal: 60}}/>
                        {/* <MenuOption onSelect={() => console.log('Option 3 selected')} text='Option 3' /> */}
                      </MenuOptions>
                    </Menu>
                  </View>
                </MenuProvider>
              </View>
              <View style={styles.graphContainer}>
                <View style={{marginTop: 0, height: '90%'}}>
                  {optionPicked === "Week" ? <WeekBarGraph /> : <DayBarGraph/>}
                </View>
              </View>
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
            <Text style={{ fontSize: 25, color: "black", paddingHorizontal: 15, paddingVertical: 8, fontWeight: "700", fontFamily: 'Avenir' }}>Add Note</Text>
            <View style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
              <Text style={styles.modalSubtitle}>TYPE</Text>
              <SegmentedControl
                values={['Diet', 'Exercise', 'Alcohol']}
                // selectedIndex={this.state.selectedIndex}
                // onChange={(event) => {
                //   this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                // }}
                style={{width: '70%'}}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
              <Text style={styles.modalSubtitle}>TIME</Text>
              
            </View>
            <Pressable 
              style={[{ backgroundColor: '#018767', marginTop: 20, borderRadius: 10,}]}
              onPress={() => setNoteModal(!noteModal)}
            >
              <Text style={{ fontSize: 20, color: "white", paddingHorizontal: 15, paddingVertical: 8, fontWeight: "600",}}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;