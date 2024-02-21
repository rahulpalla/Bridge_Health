import React from 'react';
import { View, Text } from 'react-native';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';

const GraphDropdown = () => {
  return (
    <MenuProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Menu>
          <MenuTrigger text="Select option" />
          <MenuOptions>
            <MenuOption onSelect={() => console.log('Option 1 selected')} text='Option 1' />
            <MenuOption onSelect={() => console.log('Option 2 selected')} text='Option 2' />
            <MenuOption onSelect={() => console.log('Option 3 selected')} text='Option 3' />
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  );
};

export default GraphDropdown;
