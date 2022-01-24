import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import EditProfile from './EditProfile';
import SavedAddress from './SavedAddress';
import PaymentMethods from './PaymentMethods';
import ContactPref from './ContactPref';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';

const MyAccount = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray3,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>My Account</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: COLORS.gray2,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
          padding: SIZES.padding,
        }}>
        <Image
          source={require('../../assets/images/user-profile.jpg')}
          style={{height: 70, width: 70, borderRadius: 40}}
        />
        <View style={{paddingLeft: SIZES.base}}>
          <Text style={{...FONTS.body5}}>Welcome</Text>
          <Text style={{...FONTS.body3, color: COLORS.black}}>
            Your name here
          </Text>
        </View>
      </View>

      {/* TEXT INPUT */}
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              My Addresses
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              Payment Methods
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              Contact Preferences
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body4,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <TextButton
        label="Click here for help options"
        labelStyle={{...FONTS.body3}}
        buttonContainerStyle={{
          height: 55,
          width: SIZES.width - 50,
          marginTop: SIZES.padding,
          borderRadius: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      />
      </View>
    </View>
  );
};

export default MyAccount;
