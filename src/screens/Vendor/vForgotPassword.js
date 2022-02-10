import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {TextButton, FormInput} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import VendorLayout from './VendorLayout';

const vForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const forgotPassValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required!'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validateOnMount={true}
      onSubmit={
        values => alert(JSON.stringify(values))
        // call login service here where we can pass these values
      }
      validationSchema={forgotPassValidationSchema}>
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
          title="Password Recovery"
          header="Vendor Profile"
          subtitle="Please enter your email address to recover your password"
          titleContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.padding,
          }}
          backButton={() => navigation.goBack()}
          formInput={
            <View
              style={{
                flex: 1,
                marginTop: SIZES.padding,
              }}>
              <FormInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                iconName="email"
                iconStyle={{paddingRight: SIZES.base}}
                iconSize={19}
                label="Email"
                keyboardType="email-address"
                customInputStyle={{backgroundColor: COLORS.white}}
                autoCompleteType="email"
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
            </View>
          }>
          {/* FormInput */}

          {/* Button */}

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              paddingTop: SIZES.padding,
            }}>
            <TextButton
              label="Send Email"
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
              onPress={handleSubmit}
            />
          </View>
        </VendorLayout>
      )}
    </Formik>
  );
};

export default vForgotPassword;
