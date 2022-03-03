import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';
import {APP_ROUTES} from '../../routes/router';

const Account = ({navigation}) => {
  const [ifIsSignedIn, setIfIsSignedIn] = React.useState(false);

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
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <View style={{marginHorizontal: SIZES.padding}}>
          <TextButton
            label="Edit Profile"
            buttonContainerStyle={{
              paddingVertical: 15,
              backgroundColor: null,
              alignItems: null,
            }}
            appendComponent={<Ionicons name="person-outline" size={22} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
            onPress={() => navigation.navigate(APP_ROUTES.EditProfile)}
          />

          <TextButton
            label="My Addresses"
            buttonContainerStyle={{
              paddingVertical: 15,
              backgroundColor: null,
              alignItems: null,
            }}
            appendComponent={<Ionicons name="navigate-outline" size={22} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
            onPress={() => navigation.navigate(APP_ROUTES.SavedAddress)}
          />

          <TextButton
            label="Payment Methods"
            buttonContainerStyle={{
              paddingVertical: 15,
              backgroundColor: null,
              alignItems: null,
            }}
            appendComponent={<Ionicons name="person-outline" size={22} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
            onPress={() => navigation.navigate(APP_ROUTES.PaymentMethods)}
          />

          <TextButton
            label="Contact Preferences"
            buttonContainerStyle={{
              paddingVertical: 15,
              backgroundColor: null,
              alignItems: null,
            }}
            appendComponent={<Ionicons name="person-outline" size={22} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
            onPress={() => navigation.navigate(APP_ROUTES.ContactPref)}
          />

          <TextButton
            label={ifIsSignedIn ? 'Sign In' : 'Sign In'}
            buttonContainerStyle={{
              paddingVertical: 15,
              backgroundColor: null,
              alignItems: null,
            }}
            appendComponent={<Ionicons name="exit-outline" size={22} />}
            prependComponent={
              <Ionicons name="chevron-forward-outline" size={22} />
            }
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
            onPress={() =>
              setIfIsSignedIn(!ifIsSignedIn) &
              navigation.replace(APP_ROUTES.SignIn)
            }
          />
        </View>
      </View>

      {/* BUTTON */}

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
          appendComponent={
            <Ionicons
              style={{paddingRight: SIZES.base}}
              name="headset-outline"
              size={30}
            />
          }
          label="Click here for help options"
          labelStyle={{...FONTS.body3}}
          onPress={() => navigation.navigate(APP_ROUTES.CustomerSupport)}
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

export default Account;
