import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomHeaderTitle from '../components/CustomHeaderTitle.js';


const messages = [
  { id: '1', text: 'I\'ve been reviewing the data from your recent glucose levels, and I wanted to reach out to discuss some patterns we\'ve observed.', sender: 'Dr. Doo Little', receiver: 'User1', timestamp: '10:00 AM' },
  { id: '2', text: 'I\'ll start keeping a detailed food diary starting today and share it with you before our appointment. Hopefully, it\'ll provide more insights. Thank you again for your proactive approach to my care. Looking forward to our discussion.', sender: 'User1', receiver: 'Dr. Doo Little', timestamp: '10:01 AM' },
];

const MessageScreen = ({navigation}) => {
  const [userName, setUserName] = React.useState('Dr. Doo Little');
  const [profilePic, setProfilePic] = React.useState('/Users/zane/Documents/Github/Bridge_Health/assets/image_1.png');

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeaderTitle userName={userName} profilePic={profilePic} navigation={navigation}/>,
    });
  }, [navigation, userName, profilePic]);

  const renderItem = ({ item }) => {
    const isUser1 = item.sender === 'User1';
    return (
      <View
        style={[
          styles.messageContainer,
          isUser1 ? styles.rightAlign : styles.leftAlign,
        ]}>
        {!isUser1 && <Text style={styles.senderText}>{item.sender}:</Text>}
        <Text style={[styles.messageText, isUser1 ? styles.rightText : null]}>
          {item.text}
        </Text>
        <Text style={[styles.senderTimeText, isUser1 ? styles.receiverTimeText : null]}>{item.timestamp}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
        


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },
  messageContainer: {
    margin: 10,
    padding: 12,
    borderRadius: 10,
  },
  leftAlign: {
    alignSelf: 'flex-start',
    backgroundColor: "#F7F7F7",
    marginLeft: 15,
    marginRight: 75,
  },
  rightAlign: {
    alignSelf: 'flex-end',
    backgroundColor: "#2F80ED",
    marginRight: 15,
    marginLeft: 75,
  },
  rightText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  senderText: {
    color: "#F2994A",
    paddingBottom: 12,
  },
  senderTimeText: {
    paddingTop: 15,
    textAlign: 'right',
    color: "#A1A1BC",
  },
  receiverTimeText: {
    paddingTop: 15,
    textAlign: 'right',
    color: "#FFFFFF",
  }
});

export default MessageScreen;
