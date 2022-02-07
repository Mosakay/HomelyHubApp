import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';

const Register = ({navigation}) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);

  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    phoneNumber: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        'Your number is not correct!',
      )
      .min(8, ({min}) => `Phone number must contain at least ${min} numbers.`)
      .required('Phone number is required!'),
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
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
      }}
      validateOnMount={true}
      onSubmit={values => alert(JSON.stringify(values))}
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
          titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
          subtitle="Register your account now to become a vendor"
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
                        paddingHorizontal: SIZES.base,
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
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                label="Phone Number"
                iconName="smartphone"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                placeholder="Type your phone number"
                containerStyle={{marginTop: SIZES.radius}}
                customInputStyle={{backgroundColor: COLORS.white}}
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
                  <View style={{justifyContent: 'center'}}>
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
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                secureTextEntry={!showPass}
                autoCompleteType="password"
                label="Password"
                customInputStyle={{backgroundColor: COLORS.white}}
                containerStyle={{paddingTop: SIZES.base + 10}}
                errorMsg={
                  errors.password &&
                  touched.password && (
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.red,
                        marginTop: 5,
                        paddingHorizontal: SIZES.base,
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

              <FormInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                customInputStyle={{backgroundColor: COLORS.white}}
                placeholder="Confirm your password"
                iconName="lock"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Confirm Password"
                secureTextEntry={!showPass2}
                autoCompleteType="password"
                containerStyle={{marginTop: SIZES.padding}}
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

              {/* Footer */}

              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingTop: SIZES.radius,
                }}>
                <TextButton
                  label="Register"
                  onPress={() => navigation.navigate('vMenuCreation')}
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
                    marginBottom: SIZES.padding * 2,
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
      )}
    </Formik>
  );
};

export default Register;
