import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {utils} from '../../utils';
import {Formik} from 'formik';
import * as yup from 'yup';
import { string } from 'yup/lib/locale';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [surnameError, setSurnameError] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState('');
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
    firstName: yup
      .string()
      .min(3, ({min}) => `First name must be at least ${min} characters long.`)
      .required('First name is required!'),
    surname: yup
      .string()
      .min(3, ({min}) => `Surname must be at least ${min} characters long.`)
      .required('First name is required!'),
    // phoneNumber: yup
    //   .number()
    //   .min(10, ({min}) => `Surname must be at least ${min} characters long.`)
    //   .matches(phoneRegExp, 'Enter a valid phone number')
    //   .required('Phone number is required'),
  });

  

  return (
    <Formik
    initialValues={{email: '', password: '', firstName: '', surname: '', phoneNumber: '',}}
    validateOnMount={true}
    onSubmit={values => console.log(values)}
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
    <ScrollView>
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
          {errors.email && touched.email && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.red,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {errors.email}
                </Text>
              )}

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
            <View
            style={{justifyContent:'center'}}
            >
              <Image
              source={firstname == "" || (firstname != "" && firstNameError == "") ? icons.correct : icons.cancel}
              style={{
                height: 20,
                width: 20,
                tintColor: firstname == "" ? COLORS.gray : (firstname != "" && firstNameError == "") ? COLORS.green : COLORS.red
              }}
              />
            </View>
          }
          />
          {errors.firstName && touched.firstName && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.red,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {errors.firstName}
                </Text>
              )}          

          <FormInput
          onChangeText={handleChange('surname')}
          onBlur={handleBlur('surname')}
          value={values.surname}  
          label="Surname"
          placeholder="Type your surname here"
          containerStyle={{marginTop: SIZES.radius}}
          // onChange={(value) => {setSurname(value)}}
          errorMsg={surnameError}
          appendComponent={
            <View
            style={{justifyContent:'center'}}
            >
              <Image
              source={surname == "" || (surname != "" && surnameError == "") ? icons.correct : icons.cancel}
              style={{
                height: 20,
                width: 20,
                tintColor: surname == "" ? COLORS.gray : (surname != "" && surnameError == "") ? COLORS.green : COLORS.red
              }}
              />
            </View>
          }
          />
          {errors.surname && touched.surname && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.red,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {errors.surname}
                </Text>
              )}     
                   {/* phone input*/}

          <FormInput
          onChangeText={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
          value={values.phoneNumber}  
          label="Phone Number"
          iconName="smartphone"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          placeholder="Type your phone number here"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={(value) => {setPhoneNumber(value)}}
          errorMsg={phoneNumberError}
          keyboardType="numeric"
          appendComponent={
            <View
            style={{justifyContent:'center'}}
            >
              <Image
              source={phoneNumber == "" || (phoneNumber != "" && phoneNumberError == "") ? icons.correct : icons.cancel}
              style={{
                height: 20,
                width: 20,
                tintColor: phoneNumber == "" ? COLORS.gray : (phoneNumber != "" && phoneNumberError == "") ? COLORS.green : COLORS.red
              }}
              />
            </View>
          }
          />
          {errors.phone && touched.phone && (
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.red,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {errors.phone}
                </Text>
              )}
              {/* Footer */}

          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <TextButton
              label="Next"
              // disabled={isEnableSignUp() ? false : true}
              buttonContainerStyle={{
                height: 50,
                width: SIZES.width / 2,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius + 5,
                backgroundColor: COLORS.green2
              }}
              onPress={() => navigation.navigate("SignUp2")}
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
    </ScrollView>
      )}
    </Formik>
  );
};

export default SignUp;

