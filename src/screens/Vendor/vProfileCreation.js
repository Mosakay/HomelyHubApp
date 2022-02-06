import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';

import {launchImageLibrary} from 'react-native-image-picker';

const vProfileCreation = ({navigation}) => {


    const changePhoto = () => {
        const options = {
          noData: true,
        };
        launchImageLibrary(options, (response) => {
          console.log(response);
        });
      };

  const vendorSchema = yup.object().shape({
    businessName: yup
      .string()
      .min(
        5,
        ({min}) => `Business name must be at least ${min} characters long.`,
      )
      .required('Business name is required!'),
  });
  return (
    <Formik
      initialValues={{
        businessName: '',
      }}
      validateOnMount={true}
      onSubmit={values => values}
      validationSchema={vendorSchema}>
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
          title="Business Profile Creation"
          titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
          subtitle="Personalise and own your business with this business creation"
          backButton={() => navigation.goBack()}>
          <View style={{flex: 1, paddingHorizontal: SIZES.padding + 10}}>
            <FormInput
              onChangeText={handleChange('businessName')}
              onBlur={handleBlur('businessName')}
              value={values.businessName}
              label="Business Name"
              placeholder="Type your business name here"
              containerStyle={{marginTop: SIZES.radius}}
              customInputStyle={{backgroundColor: COLORS.white}}
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
            {/* {errors.businessName && touched.businessName && (
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.red,
                  marginTop: 5,
                }}>
                {errors.businessName}
              </Text>
            )} */}

            <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
              This is the business name that will be on display to users on the
              app.
            </Text>

            <TouchableOpacity onPress={changePhoto}>
     <Text>Add business logo</Text>
</TouchableOpacity>

          </View>
        </VendorLayout>
      )}
    </Formik>
  );
};

export default vProfileCreation;
