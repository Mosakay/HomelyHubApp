import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';

const EditProfile = ({navigation}) => {
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

      {/* EDIT PROFILE PICTURE */}

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
          padding: SIZES.padding,
        }}>
        <Avatar.Image
          source={require('../../assets/images/user-profile.jpg')}
          size={70}
        />
        <View style={{paddingTop: SIZES.base}}>
          <TouchableOpacity>
            <Text style={{...FONTS.body4, color: COLORS.primary}}>
              Edit Account Picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* INPUTS */}
      <View style={{marginHorizontal: SIZES.padding}}>
      
      <FormInput
        // onChangeText={handleChange('firstName')}
        // onBlur={handleBlur('firstName')}
        // value={values.firstName}
        label="First Name"
        placeholder="Type your first name here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
        // appendComponent={
        //   <View style={{justifyContent: 'center'}}>
        //     <Image
        //       source={!errors.firstName ? icons.correct : icons.cross}
        //       style={{
        //         height: 20,
        //         width: 20,
        //         tintColor: !errors.firstName ? COLORS.green : COLORS.red,
        //       }}
        //     />
        //   </View>
        // }
      />
      {/* {errors.firstName && touched.firstName && (
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.red,
            marginTop: 5,
          }}>
          {errors.firstName}
        </Text>
      )} */}

      {/* SURNAME */}

      <FormInput
        // onChangeText={handleChange('lastName')}
        // onBlur={handleBlur('lastName')}
        // value={values.lastName}
        label="Last name"
        placeholder="Type your last name here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setLastName(value)}
        // appendComponent={
        //   <View style={{justifyContent: 'center'}}>
        //     <Image
        //       source={!errors.lastName ? icons.correct : icons.cross}
        //       style={{
        //         height: 20,
        //         width: 20,
        //         tintColor: !errors.lastName ? COLORS.primary : COLORS.red,
        //       }}
        //     />
        //   </View>
        // }
      />
      {/* {errors.lastName && touched.lastName && (
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.red,
            marginTop: 5,
          }}>
          {errors.lastName}
        </Text>
      )} */}
      </View>

      {/* FOOTER */}

      <View
        style={{
          borderWidth: 2,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding * 6,
          borderRadius: SIZES.radius,
          borderColor: COLORS.gray2,
        }}></View>

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
          label="Save Profile"
          onPress={() => navigation.goBack()}
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

export default EditProfile;
