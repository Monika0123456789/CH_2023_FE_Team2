import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  UserCog  } from 'lucide-react-native';

export default FooterComp = ({navigation}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 }}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#000"/>
      </Pressable>
      <Icon name="sliders" size={24} color="#000" />
      <Icon name="user" size={30} color="#000" />
      <Pressable onPress={() => navigation.navigate('AdminLogin')}>
        <UserCog size={30} color="#000"/>
      </Pressable>
    </View>
  );
};
