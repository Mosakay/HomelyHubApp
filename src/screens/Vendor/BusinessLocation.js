import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';
import VendorLayout from './VendorLayout';

const BusinessLocation = ({navigation}) => {
  return (    <VendorLayout
    header="Business Profile"
    title="Business location"
    titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
    subtitle="Further build your business profile by completing the dish & cuisine category"
    backButton={() => navigation.goBack()}> 
    <View style={{flex: 1}}>
      {/* HEADER */}

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
      <Text>
        Example = 34 willow way
      </Text>
      {/* Town / City*/}
      <FormInput
        label="*Town/City"
        placeholder="Type your town or city here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
      />      
      <Text>
        Example = London
      </Text>


      {/* Postcode */}

      <FormInput

        label="*Postcode"
        placeholder="Type your Post Code here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => postCode(value)}

      />
      <Text>
          Example = LO4 D0N
      </Text>

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
    </VendorLayout>
  );
};

export default BusinessLocation;
