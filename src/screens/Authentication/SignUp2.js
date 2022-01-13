import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {utils} from '../../utils';


const SignUp2 = ({navigation}) => {


    const [password, setPassword] = React.useState('');
    const [showPass, setShowPass] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("")

    function isEnableSignUp() {
        return password != '' && passwordError == '';
      }

    return (
        <AuthLayout
        title="Sign Up"
        subtitle="Next let's secure the account..."
        >

            <View
            style={{
                flex: 1,
                marginTop: SIZES.padding,
            }}
            >
            <FormInput
            placeholder="Create your password"
          iconName="lock"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {

            utils.validatePassword(value, setPasswordError)
              setPassword(value)
            }}
            errorMsg={passwordError}
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

        <View
        style={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.padding
        }}
        >
            <Text style={{...FONTS.body4}}>* Password must be 8 characters long.</Text>
            <Text style={{...FONTS.body4}}>* Must include atleast one uppercase letter</Text>
            <Text style={{...FONTS.body4}}>* A mixture of letters and numbers.</Text>
        </View>

        <FormInput
        placeholder="Confirm your password"
          iconName="lock"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Confirm Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.padding}}
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

        {/* Footer */}

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TextButton
            label="Sign Up"
            disabled={isEnableSignUp() ? false : true}
            buttonContainerStyle={{
              height: 50,
              width: SIZES.width / 2,
              alignItems: 'center',
              marginTop: SIZES.padding * 2,
              borderRadius: SIZES.radius + 5,
              backgroundColor: isEnableSignUp() ? COLORS.green2 : COLORS.transparentPrimary
            }}
            onPress={() => navigation.navigate("Otp")}
          />
        </View>

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
            Already registered?
          </Text>

          <TextButton
          label="Sign In"
          buttonContainerStyle={{
            backgroundColor: null,
            marginLeft: 3,
          }}
          labelStyle={{
            ...FONTS.body3,
            color: COLORS.green2,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate("SignIn")}
          />
        </View>

            </View>
    
        </AuthLayout>
    )
}

export default SignUp2
