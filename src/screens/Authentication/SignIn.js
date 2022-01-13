import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FormInput, CustomSwitch, TextButton} from '../../components';
import {utils} from '../../utils';
import { Switch } from 'react-native-paper';


const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  const onToggleSwitch = () => setSaveMe(!saveMe);



  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed!">
      <Text
        style={{textAlign: 'center', ...FONTS.body3}}>
        Continue with Social Media
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: SIZES.base,
        }}>
        <FontAwesome5
          style={{paddingHorizontal: SIZES.base}}
          name="facebook"
          size={33}
          color="black"
        />
        <FontAwesome5
          style={{paddingHorizontal: SIZES.base}}
          name="google"
          size={33}
          color="black"
        />
        <FontAwesome5
          style={{paddingHorizontal: SIZES.base}}
          name="twitter"
          size={33}
          color="black"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: SIZES.padding,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 30, textAlign: 'center', ...FONTS.body4, color: COLORS.black}}>
            Or
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        {/* Form Inputs */}
        <FormInput
          iconName="email"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          iconName="lock"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Frogot pass */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          {/* <CustomSwitch value={saveMe} onChange={onToggleSwitch} /> */}
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Switch 
          value={saveMe} 
          onValueChange={onToggleSwitch}
          color="#1EB091"
          />
          <Text style={{
            ...FONTS.body4,
          }}>Save Me</Text>
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

        {/* Sign In */}
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TextButton
            label="Sign In"
            disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
              height: 50,
              width: SIZES.width / 2,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius + 5,
              backgroundColor: isEnableSignIn()
                ? COLORS.green2
                : COLORS.transparentPrimary,
            }}
          />
        </View>

        {/* Sign Up */}
        
        <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          justifyContent: 'center'
        }}
        >
          <Text
          style={{
            color: COLORS.darkGray,
            ...FONTS.body3
          }}
          >
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
          onPress={() => navigation.navigate("SignUp")}
          />
        </View>

        {/* Guest */}

        <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          justifyContent: 'center'
        }}
        >
          <Text
          style={{
            color: COLORS.darkGray,
            ...FONTS.body3
          }}
          >
            Continue as
          </Text>

          <TextButton
          label="@Guest"
          buttonContainerStyle={{
            backgroundColor: null,
            marginLeft: 3,
          }}
          labelStyle={{
            ...FONTS.body3,
            color: COLORS.darkGray,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate("CustomDrawer")}
          />
        </View>

      </View>
      {/* <Ionicons name="share-social-outline" size={22} />
      <MaterialIcons name="arrow-forward-ios" size={22} color="black" /> */}
    </AuthLayout>
  );
};


const styles = StyleSheet.create({

});

export default SignIn;
