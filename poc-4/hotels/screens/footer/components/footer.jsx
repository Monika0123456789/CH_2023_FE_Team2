import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FooterComp = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 }}>
      <Icon name="home" size={30} color="#000" />
      <Icon name="sliders" size={24} color="#000" />
      <Icon name="user" size={30} color="#000" />
      
    </View>
  );
};
