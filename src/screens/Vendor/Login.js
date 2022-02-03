import {View, Text} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Switch} from 'react-native-paper';

const Login = ({navigation}) => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const onToggleSwitch = () => setRememberMe(!rememberMe);

  return (
    <VendorLayout
      title="Vendor Login"
      titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
      subtitle="Login to your business profile using your email and password"
      header="Vendor Account"
      backButton={() => {}}
      formInput={
        <View>
          <FormInput
            label="Email"
            customInputStyle={{backgroundColor: COLORS.white}}
            containerStyle={{paddingTop: SIZES.padding + 10}}
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

          <View
            style={{
              paddingHorizontal: SIZES.padding + 10,
              paddingTop: SIZES.base,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Switch
                  value={rememberMe}
                  onValueChange={onToggleSwitch}
                  color="#1EB091"
                />
                <Text
                  style={{
                    ...FONTS.body4,
                  }}>
                  Remember Me
                </Text>
              </View>
              <TextButton
                label="Forgot Password"
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            </View>
          </View>

          {/* Footer */}

          <View style={{justifyContent: 'center', flexDirection: 'row', paddingTop: SIZES.radius}}>
            <TextButton
              label="Login"
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
                  Don't have an account?
                </Text>

                <TextButton
                  label="Sign Up"
                  buttonContainerStyle={{
                    backgroundColor: null,
                    marginLeft: 3,
                  }}
                  labelStyle={{
                    ...FONTS.body3,
                    color: COLORS.green2,
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Register')}
                />
              </View>
        </View>
      }></VendorLayout>
  );
};

export default Login;
