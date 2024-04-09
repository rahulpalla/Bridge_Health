import React from 'react';
import { Image } from 'react-native';
import InboxScreen from '../screens/InboxScreen';
import MessageScreen from '../screens/MessageScreen';
import CustomHeaderTitle from './CustomHeaderTitle';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MessageFlow() {
return (
    <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false, tabBarLabel: '' }} />
    <Stack.Screen name="Message Screen" component={MessageScreen} options={{
            headerShown: true,
            header: (props) => <CustomHeaderTitle {...props} />,
            headerStyle: {
                backgroundColor: 'red',
                height: 120,
            }
        }}
    />
    </Stack.Navigator>
);
}

export default MessageFlow;
