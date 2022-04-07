import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {APP_ROUTES} from '../../routes/router';
import { useNavigation } from '@react-navigation/native';

const Settings = ({navigation}) => {
  const [showPass, setShowPass] = React.useState(false);

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
          paddingRight: 90,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: SIZES.padding}}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text
          style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
          Account Settings
        </Text>
      </View>

      {/* INPUTS */}
      <View
        style={{
          marginHorizontal: SIZES.padding + 10,
          marginVertical: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            marginBottom: -SIZES.base,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}>
              Account Information
            </Text>
          </View>
        </TouchableOpacity>
        <FormInput
          // onChangeText={handleChange('firstName')}
          // onBlur={handleBlur('firstName')}
          // value={values.firstName}
          placeholder="Type your new email address"
          iconName="email"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Email"
          customInputStyle={{backgroundColor: COLORS.white}}
          containerStyle={{paddingTop: SIZES.padding + 10}}
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
        <TouchableOpacity
          style={{
            marginTop: SIZES.base,
            marginBottom: -SIZES.radius,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body4,
              }}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
        <FormInput
          // onChangeText={handleChange('lastName')}
          // onBlur={handleBlur('lastName')}
          // value={values.lastName}
          label="Phone Number"
          iconName="smartphone"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          placeholder="Type your new phone number"
          containerStyle={{marginTop: SIZES.radius}}
          customInputStyle={{backgroundColor: COLORS.white}}
          keyboardType="numeric"
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
        <TouchableOpacity
          style={{
            marginTop: SIZES.base,
            marginBottom: -SIZES.radius,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body4,
              }}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
        <FormInput
          // onChangeText={handleChange('password')}
          // onBlur={handleBlur('password')}
          // value={values.password}
          placeholder="Type your new password"
          iconName="lock"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          label="Password"
          customInputStyle={{backgroundColor: COLORS.white}}
          containerStyle={{marginTop: SIZES.radius}}
        />
        <TouchableOpacity
          style={{
            marginTop: SIZES.base,
            marginBottom: -SIZES.radius,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body4,
              }}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: SIZES.padding,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}>
              Account Management
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: SIZES.padding,
          }}
          onPress={() => {}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.red,
                ...FONTS.body5,
              }}>
              Delete Account
            </Text>
          </View>
        </TouchableOpacity>
        

      </View>
    </View>
  );
};

const VenorSwitch = () => {

  const navigation = useNavigation();
  const handleVendorClick = () => {
    // dispatch(userTypeAction(CUSTOMER_OR_VENDOR.Vendor));
    navigation.navigate(APP_ROUTES.VendorStack);
  };

  const handleCustomerClick = () => {
    // dispatch(userTypeAction(CUSTOMER_OR_VENDOR.Customer));
    navigation.navigate(APP_ROUTES.UserStack);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TextButton
        onPress={handleVendorClick}
        label="Become a Vendor"
        buttonContainerStyle={{
          borderWidth: 1,
          borderColor: COLORS.gray3,
          width: 150,
          minHeight: SIZES.height / 18,
          marginTop: SIZES.radius,
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.radius,
        }}
        labelStyle={{
          color: COLORS.orange,
          ...FONTS.body4,
        }}
      />
    </View>
  );
};

export default Settings;
