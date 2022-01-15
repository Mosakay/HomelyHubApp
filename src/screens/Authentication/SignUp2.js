import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {utils} from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';


const SignUp2 = ({navigation}) => {


    const [password, setPassword] = React.useState('');
    const [showPass, setShowPass] = React.useState(false);
    const [password2, setPassword2] = React.useState('');
    const [showPass2, setShowPass2] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("")

    function isEnableSignUp() {
        return password != '' && passwordError == '';
      }
    const loginValidationSchema = yup.object().shape({
      password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters.`)
        .required('Password is required!')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
        ,    
    });

    return (
      <Formik
        initialValues={{password: ''}}
        validateOnMount={true}
        onSubmit={values => console.log(values)}
        validationSchema={loginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
      // <ScrollView>
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
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Create your password"
              iconName="lock"
              iconStyle={{paddingRight: SIZES.base}}
              iconSize={19}
              label="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{marginTop: SIZES.radius}}
          // onChange={value => {

          //   utils.validatePassword(value, setPasswordError)
          //     setPassword(value)
          //   }}
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
          {errors.password && touched.password && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.red,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {errors.password}
                </Text>
              )}        

        {/* <View
        style={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.padding
        }}
        >
            <Text style={{...FONTS.body4}}>* Password must be 8 characters long.</Text>
            <Text style={{...FONTS.body4}}>* Must include atleast one uppercase letter</Text>
            <Text style={{...FONTS.body4}}>* A mixture of letters and numbers.</Text>
        </View> */}

        <FormInput
        placeholder="Confirm your password"
          iconName="lock"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Confirm Password"
          secureTextEntry={!showPass2}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.padding}}
          onChange={value => setPassword2(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass2(!showPass2)}>
              <Image
                source={showPass2 ? icons.eye_close : icons.eye}
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
      // </ScrollView>
      )}
      </Formik>
    )
}

export default SignUp2
