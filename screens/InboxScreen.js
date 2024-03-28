import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

const messages = [
  { id: '1', sender: 'Dr. Doo Little', content: 'I love Rohan Patel', profilePicUrl: '/Users/zane/Documents/Github/Bridge_Health/assets/image 1.png', timeSent: '08:31 AM', messageCount: 5 },
  { id: '2', sender: 'Dr. Doo Little', content: 'Rohan patel is bad as hell', profilePicUrl: '/Users/zane/Documents/Github/Bridge_Health/assets/image 1.png', timeSent: '08:31 AM', messageCount: 5 },

];

const InboxScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Message Screen', {})}>
      <Image source={{ uri: item.profilePicUrl }} style={styles.profilePic} />
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
      <View style={styles.messageInfo}>
        <Text style={styles.timeSent}>{item.timeSent}</Text>
        <View style={styles.messageCountContainer}>
          <Text style={styles.messageCountText}>{item.messageCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Recent Chats</Text>
        <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
          <Icon name="search" size={24} color="black" weight="thin" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  timeSent: {
    color: "#333333",
    paddingBottom: 5
  },
  messageCountContainer: {
    marginTop: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2F80ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInfo: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
  },
  messageCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#EAF2FD',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center', // Align items vertically
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular profile pictures
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
    alignSelf: "Top",
  },
  content: {
    paddingTop: 5,
    color: '#4F5E7B',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 55,
    paddingRight: 30,
  },
  headerTitle: {
    fontFamily: 'Gilroy-SemiBold', // Make sure this font is linked in your React Native project
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22,
    color: '#1B1A57',
  },
});

export default InboxScreen;
