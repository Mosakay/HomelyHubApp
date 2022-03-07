import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FormInput, TextButton} from '../../components';
import {Switch} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import DeviceInfo from 'react-native-device-info';
import {AuthContext} from '../../context/AuthContext';
import {useContext} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../context/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_ROUTES } from '../../routes/router';

const SignIn = ({navigation}) => {
  const [guest, setGuest] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('guest').then(value => {
      if (value == null) {
        AsyncStorage.setItem('guest', 'true');
        setGuest(true);
      } else {
        setGuest(false);
      }
    });
  }, []);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [showPass, setShowPass] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  // const { setAuth } = useContext(AuthContext);

  const onToggleSwitch = () => setRememberMe(!rememberMe);

  const loginUser = async user => {
    try {
      const userRequest = await axios.post(
        `${BASE_URL}/Security/Authenticate`,
        JSON.stringify(user),
        {headers: {'Content-Type': 'application/json'}, withCredentials: true},
      );
      console.log(JSON.stringify(response?.data));
    
      if (userRequest?.data.id) {
        navigation.navigate(APP_ROUTES.CustomerDashboard);
      } else {
        console.log('Incorrect credentials');
      }
    } catch (err) {
      console.warn(err.message);
    }
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    password: yup
      .string()
      .min(6, ({min}) => `Must be at least ${min} characters.`)
      .required('Password is required!'),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Must contain One Uppercase, One Lowercase, One Number and One Special Case Character',
    // ),
    devideId: yup.string(),
  });

  let idD = DeviceInfo.getDeviceId();
  console.log(idD);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        deviceId: '',
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
        <ScrollView style={{backgroundColor: COLORS.white}}>
          <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, you've been missed!">
            <Text
              style={{
                textAlign: 'center',
                ...FONTS.body3,
                marginTop: SIZES.base,
              }}>
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
                <Text
                  style={{
                    width: 30,
                    textAlign: 'center',
                    ...FONTS.body4,
                    color: COLORS.black,
                  }}>
                  Or
                </Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <View style={{flex: 1, marginTop: SIZES.padding}}>
              {/* Form Inputs */}
              
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                iconName="email"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Email"
                keyboardType="email-address"
                onChange={value => setEmail(value)}
                errorMsg={
                  errors.email &&
                  touched.email && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.orange,
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
                          : COLORS.darkGray2,
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
                secureTextEntry={!showPass}
                autoCompleteType="password"
                containerStyle={{marginTop: SIZES.radius}}
                onChange={value => setPassword(value)}
                errorMsg={
                  errors.password &&
                  touched.password && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.orange,
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

              {/* Save me & Frogot pass */}

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
                  onPress={() => navigation.navigate(APP_ROUTES.ForgotPassword)}
                />
              </View>

              {/* Sign In */}

              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <TextButton
                  onPress={handleSubmit}
                  label="Sign In"
                  disabled={!isValid}
                  buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius + 5,
                    backgroundColor: isValid
                      ? COLORS.primary
                      : COLORS.transparentPrimary,
                    borderColor: isValid ? COLORS.gray3 : '#CBB4B4',
                    borderWidth: 2,
                  }}
                />
              </View>

              {/* Sign Up */}

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
                  onPress={() => navigation.navigate(APP_ROUTES.SignUp)}
                />
              </View>

              {/* Guest */}

              {guest && (
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
                    onPress={() => navigation.navigate(APP_ROUTES.CustomerDashboard)}
                  />
                </View>
              )}
            </View>
          </AuthLayout>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
