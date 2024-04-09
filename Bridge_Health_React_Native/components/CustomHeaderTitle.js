import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = ({ userName, profilePic, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={24} color="black" weight="thin" />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 100,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CustomHeader