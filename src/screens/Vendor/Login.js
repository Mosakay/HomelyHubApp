import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Switch} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../context/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_ROUTES} from '../../routes/router';


const Login = ({navigation}) => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const onToggleSwitch = () => setRememberMe(!rememberMe);


  const loginUser = async user => {
    try {
      const userRequest = await axios.post(
        `${BASE_URL}/Security/Authenticate`,
        JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}},
      );

      if (userRequest?.data.id) {
        navigation.navigate('Dashboard');
      } else {
        console.log('Incorrect credentials');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters.`)
      .required('Password is required!'),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Must contain One Uppercase, One Lowercase, One Number and One Special Case Character',
    // ),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        const data = {
          userName: values.email,
          password: values.password,
          devideId: values.devideId,
          rememberMe,
        };
        loginUser(data).catch(err => console.error(err));
      }}
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
        <VendorLayout
          title="Vendor Login"
          titleContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.padding,
          }}
          subtitle="Login to your business profile using your email and password"
          header="Vendor Account"
          backButton={() => navigation.replace(APP_ROUTES.UserOrVendor)}
          formInput={
            <View>
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                iconName="email"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Email"
                customInputStyle={{backgroundColor: COLORS.white}}
                containerStyle={{paddingTop: SIZES.padding + 10}}
                errorMsg={
                  errors.email &&
                  touched.email && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                      }}>
                      {errors.email}
                    </Text>
                  )
                }
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.email ? icons.correct : icons.correct}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.email
                          ? COLORS.primary
                          : COLORS.gray2,
                      }}
                    />
                  </View>
                }
              />

              <FormInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                iconName="lock"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Password"
                customInputStyle={{backgroundColor: COLORS.white}}
                containerStyle={{paddingTop: SIZES.base + 10}}
                secureTextEntry={!showPass}
                autoCompleteType="password"
                errorMsg={
                  errors.password &&
                  touched.password && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                      }}>
                      {errors.password}
                    </Text>
                  )
                }
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
                    onPress={() => navigation.navigate(APP_ROUTES.vForgotPassword)}
                  />
                </View>
              </View>

              {/* Footer */}

              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingTop: SIZES.radius,
                }}>
                <TextButton
                  label="Login"
                  onPress={handleSubmit}
                  disabled={!isValid}
                  labelStyle={{...FONTS.body3, color: isValid ? COLORS.white2 : "#CBB4B4"}}
                  buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.base,
                    borderWidth: 2,
                    backgroundColor: isValid ? COLORS.primary : "#EBEBEB",
                    borderColor: isValid ? COLORS.gray3 : "#CBB4B4",
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
                  label="Register"
                  buttonContainerStyle={{
                    backgroundColor: null,
                    marginLeft: 3,
                  }}
                  labelStyle={{
                    ...FONTS.body3,
                    color: COLORS.green2,
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate(APP_ROUTES.Register)}
                />
              </View>
            </View>
          }></VendorLayout>
      )}
    </Formik>
  );
};

export default Login;
