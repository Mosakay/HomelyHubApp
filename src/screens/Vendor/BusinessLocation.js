import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';

const BusinessLocation = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* HEADER */}

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
          Edit Profile
        </Text>
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
      {/* Town / City*/}
      <FormInput
        label="*Town/City"
        placeholder="Type your town or city here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
      />


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

export default BusinessLocation;
