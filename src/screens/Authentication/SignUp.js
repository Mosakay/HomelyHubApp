import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState('');

  const phoneInput = React.useRef(null);
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  // {
  //   "email": "string",
  //   "userName": "string",
  //   "password": "string",
  //   "confirmPassword": "string",
  //   "allowedMarketing": true,
  //   "firstName": "string",
  //   "lastName": "string",
  //   "countryId": 0,
  //   "userType": 1,
  //   "deviceId": "string"
  // }

  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    userName: yup
      .string()
      .required('Username address is required!'),
    firstName: yup
      .string()
      .min(3, ({min}) => `First name must be at least ${min} characters long.`)
      .required('First name is required!'),
    lastName: yup
      .string()
      .min(3, ({min}) => `Last name must be at least ${min} characters long.`)
      .required('Last name name is required!'),
    postcode: yup
      .string()
      .matches(
        /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/,
        'Enter a correct postcode!',
      )
      .required('You must enter a postcode!'),
    phoneNumber: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        'Your number is not correct!',
      )
      .min(8, ({min}) => `Phone number must contain at least ${min} numbers.`)
      .required('A phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        postcode: '',
      }}
      validateOnMount={true}
      onSubmit={values => alert(JSON.stringify(values))
        // call login service here where we can pass these values
        
        }
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
          <AuthLayout
            title="Getting Started"
            subtitle="First let's get to know you..."
            titleContainerStyle={{marginTop: SIZES.base - 20}}>
            {/* Form Input and Sign Up */}

            <View style={{flex: 1, marginTop: SIZES.padding}}>
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Type your email address here"
                iconName="email"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                // onChange={value => {
                //   utils.validateEmail(value, setEmailError);
                //   setEmail(value);
                // }}
                errorMsg={emailError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.email ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.email ? COLORS.primary : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.email && touched.email && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.email}
                </Text>
              )}

              {/* UserName */}

              <FormInput
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                label="Username"
                placeholder="Type your username here!"
                containerStyle={{marginTop: SIZES.radius}}
                // onChange={(value) => {setFirstName(value)}}
                errorMsg={firstNameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.userName ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.userName
                          ? COLORS.green
                          : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.userName && touched.userName && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.userName}
                </Text>
              )}

              {/* FIRSTNAME */}

              <FormInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                label="First Name"
                placeholder="Type your first name here"
                containerStyle={{marginTop: SIZES.radius}}
                // onChange={(value) => {setFirstName(value)}}
                errorMsg={firstNameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.firstName ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.firstName
                          ? COLORS.green
                          : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.firstName && touched.firstName && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.firstName}
                </Text>
              )}

              {/* SURNAME */}

              <FormInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                label="Last name"
                placeholder="Type your last name here"
                containerStyle={{marginTop: SIZES.radius}}
                onChange={value => {
                  setLastName(value);
                }}
                errorMsg={lastNameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.lastName ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.lastName
                          ? COLORS.primary
                          : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.lastName && touched.lastName && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.lastName}
                </Text>
              )}

              {/* POSTCODE */}

              <FormInput
                onChangeText={handleChange('postcode')}
                onBlur={handleBlur('postcode')}
                value={values.postcode}
                label="Postcode"
                placeholder="Enter your postcode here"
                containerStyle={{marginTop: SIZES.radius}}
                // onChange={(value) => {setSurname(value)}}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.postcode ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.postcode
                          ? COLORS.primary
                          : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.postcode && touched.postcode && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.postcode}
                </Text>
              )}

              {/* phone input*/}

              {/* <FormInput
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                label="Phone Number"
                iconName="smartphone"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                placeholder="Type your phone number here"
                containerStyle={{marginTop: SIZES.radius}}
                onChange={value => {
                  setPhoneNumber(value);
                }}
                errorMsg={phoneNumberError}
                keyboardType="numeric"
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.phoneNumber ? icons.correct : icons.cross}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.phoneNumber
                          ? COLORS.primary
                          : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.phoneNumber}
                </Text>
              )} */}

              {/* PHONE NUMBER INPUT */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SIZES.radius,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    style={{paddingRight: SIZES.base}}
                    name="smartphone"
                    size={19}
                  />
                  <Text style={{color: COLORS.black, ...FONTS.body4}}>
                    Phone Number
                  </Text>
                </View>
              </View>

              <PhoneInput
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="GB"
                containerStyle={{
                  width: '100%',
                  height: 55,
                  paddingHorizontal: SIZES.padding,
                  marginTop: SIZES.base,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.lightGray2,
                }}
                textContainerStyle={{paddingVertical: 0}}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
              />

              {errors.phoneNumber && touched.phoneNumber && (
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.red,
                    marginTop: 5,
                  }}>
                  {errors.phoneNumber}
                </Text>
              )}

              {/* Footer */}

              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <TextButton
                  label="Next"
                  // disabled={isEnableSignUp() ? false : true}
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
                  }}
                  onPress={() => navigation.navigate('SignUp2')}
                  // onPress={handleSubmit}
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
                  onPress={() => navigation.navigate('SignIn')}
                />
              </View>
            </View>
          </AuthLayout>
      )}
    </Formik>
  );
};

export default SignUp;
