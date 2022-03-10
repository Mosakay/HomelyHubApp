import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../context/config';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_ROUTES } from '../../routes/router';
import {homelyHubApiQuery} from '../../apis/QueryApi';
import Snackbar from 'react-native-snackbar';

const SignUp2 = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [password2, setPassword2] = React.useState('');
  const [showPass2, setShowPass2] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [formFields, setFormFields] = React.useState({})

  const [registrationMutation, registrationMutationResult] =
    homelyHubApiQuery.useUserRegisterMutation();


  React.useEffect(() => {
    (async () => {
      const store = await AsyncStorage.getItem('fields')
      setFormFields(prev => ({...prev, ...JSON.parse(store)}))
    })()
  }, [])

  React.useEffect(() => console.log({formFields}), [formFields])

  let idD = DeviceInfo.getDeviceId();
  console.log(idD);


  const signupValidationSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters.`)
      .required('Password is required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 6  Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
    confirmPassword: yup
      .string()
      .required('Password must match')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
        userType: 1,
        allowedMarketing: true,
        deviceId: idD || ''
      }}
      validateOnMount={true}
      onSubmit={async values => {
        const data = {...formFields, ...values};
        console.log(data);

        try {
          await registrationMutation(data).unwrap();
          Snackbar.show({
            text: 'Registered Succesful',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: '#00ad00',
          });
          navigation.navigate(APP_ROUTES.SignIn);
          console.log(registrationMutationResult);
        } catch (error) {
          console.log(error);
          Snackbar.show({
            text: error.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      }}
      validationSchema={signupValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <AuthLayout title="Sign Up" subtitle="Next let's secure the account...">
          <View
            style={{
              flex: 1,
              marginTop: SIZES.padding,
            }}>

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
            {errors.password && touched.password && (
              <Text
              style={{
                ...FONTS.body4,
                color: COLORS.red,
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
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
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

            {errors.confirmPassword && touched.confirmPassword && (
              <Text
              style={{
                ...FONTS.body4,
                color: COLORS.red,
                marginTop: 5,
              }}>
                {errors.confirmPassword}
              </Text>
            )}


            {/* Footer */}

            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TextButton
                label="Sign Up"
                disabled={!isValid}
                buttonContainerStyle={{
                  height: 50,
                  width: SIZES.width / 2,
                  alignItems: 'center',
                  marginTop: SIZES.padding * 2,
                  borderRadius: SIZES.radius + 5,
                  backgroundColor: !isValid
                    ? COLORS.transparentPrimary
                    : COLORS.primary,
                    borderColor: isValid ? COLORS.gray3 : "#CBB4B4",
                    borderWidth: 2,
                }}
                onPress={handleSubmit}
               
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
                onPress={() => navigation.navigate(APP_ROUTES.SignIn)}
              />
            </View>
          </View>
        </AuthLayout>
      )}
    </Formik>
  );
};

export default SignUp2;
