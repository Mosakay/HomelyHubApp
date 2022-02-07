import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';

const vSetLocation = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* HEADER */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 2,
          borderBottomColor: COLORS.gray3,
        }}>
       <Text
          style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
          Edit Profile
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginTop: SIZES.base,
            marginLeft: SIZES.base,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="arrow-back" size={24} color={COLORS.black} />
          <Text style={{...FONTS.body5, color: COLORS.black}}>Back</Text>
        </TouchableOpacity>
      </View>


      {/* INPUTS */}
      <View style={{marginHorizontal: SIZES.padding}}>
          
      {/* Building number and streat name */}
      <FormInput
        label="*Building No. & Street Name"
        placeholder="Type your first line of your address here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
      />      
      <View>
        Example = 34 willow way
      </View>
      {/* Town / City*/}
      <FormInput
        label="*Town/City"
        placeholder="Type your town or city here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
      />      
      <View>
        Example = London
      </View>


      {/* Postcode */}

      <FormInput

        label="*Postcode"
        placeholder="Type your Post Code here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => postCode(value)}

      />
      <View>
          Example = LO4 D0N
      </View>

      </View>

      {/* FOOTER */}

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
          label="Contiune"
        //   onPress={() => navigation.goBack()}
          labelStyle={{...FONTS.body3}}
          buttonContainerStyle={{
            height: 50,
            width: SIZES.width / 2,
            marginTop: SIZES.padding,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.primary,
          }}
        />
      </View>
    </View>
  );
};

export default vSetLocation;