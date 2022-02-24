import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton } from '../../components';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '../../routes/router';

const Register = () => {
  const navigation = useNavigation();
  const [showPass, setShowPass] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);
  const [formFields, setFormFields] = React.useState({});
  const registerVendor = async values => {
    const store = await AsyncStorage.setItem(
      'fieldsVendor',
      JSON.stringify(values),
    );
    navigation.navigate('Register2');
  };

  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    phoneNumber: yup
      .string()
      .min(8, ({ min }) => `Phone number must contain at least ${min} numbers.`)
      .required('Phone number is required!'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters.`)
      .required('Password is required!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Password must be 6 characters long. \nMust include atleast one uppercase letter. \nA mixture of letters and numbers.`,
      ),
    confirmPassword: yup
      .string()
      .required('Password must match')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        phoneNumber: '',
        confirmPassword: '',
        password: '',
        deviceId:  '',
        countryId: 0,
      }}
      validateOnMount={true}
      onSubmit={values => registerVendor(values)}
      validationSchema={signUpValidationSchema}>
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
          title="Vendor Register"
          titleContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.padding,
          }}
          subtitle="Fill Your Details to initiate Registration"
          header="Vendor Account"
          backButton={() => navigation.goBack()}
          formInput={
            <View>
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Use a valid email address"
                iconName="email"
                iconStyle={{ paddingRight: SIZES.base }}
                iconSize={19}
                label="Email"
                customInputStyle={{ backgroundColor: COLORS.white }}
                containerStyle={{ paddingTop: SIZES.padding + 10 }}
                errorMsg={
                  errors.email &&
                  touched.email && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                        paddingHorizontal: SIZES.base,
                      }}>
                      {errors.email}
                    </Text>
                  )
                }
                appendComponent={
                  <View style={{ justifyContent: 'center' }}>
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
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                label="Phone Number"
                iconName="smartphone"
                iconStyle={{ paddingRight: SIZES.base }}
                iconSize={19}
                placeholder="Type your phone number"
                containerStyle={{ marginTop: SIZES.radius }}
                customInputStyle={{ backgroundColor: COLORS.white }}
                keyboardType="numeric"
                errorMsg={
                  errors.phoneNumber &&
                  touched.phoneNumber && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                        paddingHorizontal: SIZES.base,
                      }}>
                      {errors.phoneNumber}
                    </Text>
                  )
                }
                appendComponent={
                  <View style={{ justifyContent: 'center' }}>
                    <Image
                      source={
                        !errors.phoneNumber ? icons.correct : icons.correct
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.phoneNumber
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
                placeholder="Create your password"
                iconName="lock"
                iconStyle={{ paddingRight: SIZES.base }}
                iconSize={19}
                secureTextEntry={!showPass}
                autoCompleteType="password"
                label="Password"
                customInputStyle={{ backgroundColor: COLORS.white }}
                containerStyle={{ paddingTop: SIZES.base + 10 }}
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
                      style={{ height: 20, width: 20, tintColor: COLORS.gray }}
                    />
                  </TouchableOpacity>
                }
              />
              {errors.password && touched.password && (
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.red,
                    marginTop: 5,
                    paddingHorizontal: SIZES.base,
                  }}>
                  {errors.password}
                </Text>
              )}
              <FormInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                customInputStyle={{ backgroundColor: COLORS.white }}
                placeholder="Confirm your password"
                iconName="lock"
                iconStyle={{ paddingRight: SIZES.base }}
                iconSize={19}
                label="Confirm Password"
                secureTextEntry={!showPass2}
                autoCompleteType="password"
                containerStyle={{ marginTop: SIZES.padding }}
                onChange={value => setPassword2(value)}
                errorMsg={
                  errors.confirmPassword &&
                  touched.confirmPassword && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                      }}>
                      {errors.confirmPassword}
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
                    onPress={() => setShowPass2(!showPass2)}>
                    <Image
                      source={showPass2 ? icons.eye_close : icons.eye}
                      style={{ height: 20, width: 20, tintColor: COLORS.gray }}
                    />
                  </TouchableOpacity>
                }
              />
              <Text style={{ ...FONTS.body5, marginVertical: SIZES.base }}>
                A validation code will be sent to the email address and phone
                number provided to validate the account.
              </Text>
            </View>
          }
          children={
            <View>
              {/* Save me & Forget passs */}

              {/* Footer */}

              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingTop: SIZES.radius,
                }}>
                <TextButton
                  label="Continue"
                  onPress={handleSubmit}
                  disabled={!isValid}
                  labelStyle={{
                    ...FONTS.body3,
                    color: isValid ? COLORS.white2 : '#CBB4B4',
                  }}
                  buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.base,
                    borderWidth: 2,
                    backgroundColor: isValid ? COLORS.primary : '#EBEBEB',
                    borderColor: isValid ? COLORS.gray3 : '#CBB4B4',
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
                    marginBottom: SIZES.padding * 2,
                  }}
                  labelStyle={{
                    ...FONTS.body3,
                    color: COLORS.green2,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}
                  onPress={() => navigation.navigate(APP_ROUTES.VendorLogin)}
                />
              </View>
            </View>
          }></VendorLayout>
      )}
    </Formik>
  );
};

export default Register;
