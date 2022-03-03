import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';
import VendorLayout from './VendorLayout';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_ROUTES} from '../../routes/router';

const BuildingSchema = yup.object().shape({
  businessName: yup
  .string()
  .min(3, "Too Short!")
  .max(30, "Too Long!")
  .required("Name is required"),
  postcode: yup
    .string() 
    .matches(
      /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/,
      'Enter a correct postcode!',
    )
    .required('Postcode is required'),
    townCity: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "The Town/City is required")
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Address is required"),
});

const vSetLocation = ({navigation}) => {
  return (<Formik
    initialValues={{
      businessName: '',
      postcode: '',
      townCity: '',
    }}
    validateOnMount={true}
    onSubmit={values => values}
    validationSchema={BuildingSchema}>
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
    header="Business Profile"
    title="Business location"
    titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
    subtitle="Further build your business profile by completing the dish & cuisine category"
    backButton={() => navigation.goBack()}> 
    <View style={{flex: 1}}>
      {/* HEADER */}

      {/* INPUTS */}
      <View style={{marginHorizontal: SIZES.padding, marginVertical: SIZES.padding}}>
          
      {/* Building number and streat name */}
      <FormInput
              onChangeText={handleChange('businessName')}
              onBlur={handleBlur('businessName')}
              value={values.businessName}
              label="*Building No. & Street Name"
              placeholder="Type your first line of your address here"
              containerStyle={{marginTop: SIZES.radius}}
              customInputStyle={{backgroundColor: COLORS.white}}
              errorMsg={
                errors.businessName &&
                touched.businessName && (
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.primary,
                      marginTop: 5,
                    }}>
                    {errors.businessName}
                  </Text>
                )
              }
              appendComponent={
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={
                      !errors.businessName ? icons.correct : icons.correct
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: !errors.businessName
                        ? COLORS.green
                        : COLORS.gray2,
                    }}
                  />
                </View>
              }
            />
      <Text>
        Example = 34 willow way
      </Text>
      {/* Town / City*/}
      <FormInput
              onChangeText={handleChange('townCity')}
              onBlur={handleBlur('townCity')}
              value={values.townCity}
              label="*Town/City"
              placeholder="Type your town or city here"
              containerStyle={{marginTop: SIZES.radius}}
              customInputStyle={{backgroundColor: COLORS.white}}
              errorMsg={
                errors.townCity &&
                touched.townCity && (
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.primary,
                      marginTop: 5,
                    }}>
                    {errors.townCity}
                  </Text>
                )
              }
              appendComponent={
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={
                      !errors.townCity ? icons.correct : icons.correct
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: !errors.businessName
                        ? COLORS.green
                        : COLORS.gray2,
                    }}
                  />
                </View>
              }
            />
      {/* <FormInput
        label="*Town/City"
        placeholder="Type your town or city here"
        containerStyle={{marginTop: SIZES.radius}}
        customInputStyle={{backgroundColor: COLORS.white}}
        onChange={value => setFirstName(value)}
      />       */}
      <Text>
        Example = London
      </Text>


      {/* Postcode */}

      <FormInput
                onChangeText={handleChange('postcode')}
                onBlur={handleBlur('postcode')}
                value={values.postcode}
                label="*Postcode"
                placeholder="Enter your postcode here"
                containerStyle={{marginTop: SIZES.radius}}
                customInputStyle={{backgroundColor: COLORS.white}}
                onChange={value => setPostcode(value)}
                errorMsg=              {errors.postcode && touched.postcode && (
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.primary,
                      marginTop: 5,
                    }}>
                    {errors.postcode}
                  </Text>
                )}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={!errors.postcode ? icons.correct : icons.correct}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: !errors.postcode
                          ? COLORS.primary
                          : COLORS.gray2,
                      }}
                    />
                  </View>
                }
              />

      <Text>
          Example = LO4 D0N
      </Text>

      </View>

      {/* FOOTER */}

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>

      <TextButton
        disabled={!isValid}
        label="Continue"
        onPress={() => navigation.navigate(APP_ROUTES.vStoreCreation)}
        labelStyle={{...FONTS.body3, color: isValid ? COLORS.white : "#CBB4B4"}}
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
    </View>
    </VendorLayout>      
    )}
    </Formik>
  );
};

export default vSetLocation;