import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GettingStarted = ({navigation, props}) => {

  return (
    <View>
        <ScrollView>
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: SIZES.padding * 3,
                backgroundColor: COLORS.white,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.gray3,
                paddingRight: 105,
                }}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginTop: SIZES.padding}}>
                <Icon name="arrow-back" size={25} />
                </TouchableOpacity>
                <Text
                style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
                Getting Started
                </Text>
            </View>
        </ScrollView>
    </View>
    
  );
};


export default GettingStarted;