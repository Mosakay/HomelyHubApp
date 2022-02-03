import { View, Text } from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';

const Register = ({navigation}) => {
  return (
    <VendorLayout
    title="Vendor Register"
    titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
    subtitle="Register your account now to become a vendor"
    header="Vendor Account"
    backButton={() => navigation.goBack()}
    formInput={
      <View>
        <FormInput
          label="Email"
          customInputStyle={{backgroundColor: COLORS.white}}
          containerStyle={{paddingTop: SIZES.padding + 10}}
        />
                <FormInput
          label="Phone Number"
          customInputStyle={{backgroundColor: COLORS.white}}
          containerStyle={{paddingTop: SIZES.base + 10}}
        />
        <FormInput
          label="Password"
          customInputStyle={{backgroundColor: COLORS.white}}
          containerStyle={{paddingTop: SIZES.base + 10}}
        />
      </View>
    }
    children={
      <View>
        {/* Save me & Forget passs */}

      

        {/* Footer */}

        <View style={{justifyContent: 'center', flexDirection: 'row', paddingTop: SIZES.radius}}>
          <TextButton
            label="Register"
            buttonContainerStyle={{
              height: 50,
              width: SIZES.width / 2,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius + 5,
              backgroundColor: COLORS.primary,
            }}
          />
        </View>

        <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                }}>
                Already Registered?
              </Text>

              <TextButton
                label="Login"
                buttonContainerStyle={{
                  backgroundColor: null,
                  marginLeft: 3,
                }}
                labelStyle={{
                  ...FONTS.body3,
                  color: COLORS.green2,
                  fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
      </View>
    }></VendorLayout>
  );
};

export default Register;
