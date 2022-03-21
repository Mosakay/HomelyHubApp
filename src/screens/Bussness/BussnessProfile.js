import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextButton} from '../../components';

const BussnessProfile = ({navigation, props}) => {

  return (
    <View
      style={{
        flex: 1
      }}
    >
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
                Business Profile
                </Text>
            </View>
            {/* stolen stuff */}
                <Text>
                    yo
                </Text>
                {/* add cover */}
                <View>
                    {/* image */}
                    {/* button */}
                    {/* text */}
                </View>
                <View>
                    {/* contune button */}
                </View>
                {/* footer */}
                <View>
                    {/* locator */}
                </View>

        </ScrollView>
    </View>
  );
};


export default BussnessProfile;
