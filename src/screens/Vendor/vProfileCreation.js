import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import * as React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {APP_ROUTES} from '../../routes/router';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const vProfileCreation = ({navigation}) => {

  bs = React.createRef();


  const [image, setImage] = React.useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const vendorSchema = yup.object().shape({
    businessName: yup
      .string()
      .min(3, ({min}) => `At least ${min} characters long.`)
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
          titleContainerStyle={{
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.padding,
          }}
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
              errorMsg={
                errors.businessName &&
                touched.businessName && (
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.orange,
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

            <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
              This is the business name that will be on display to users on the
              app.
            </Text>

                     {/* IMAGE PICKER LOGO*/}

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color={COLORS.gray}
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
This is  the photo that will display to cutomers scrolling through vendors in their area.
            </Text>


              {/* IMAGE PICKER COVEER*/}

              <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                <View
                  style={{
                    height: 80,
                    width: SIZES.width,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{height: 80, width: SIZES.width / 1.2}}
                    imageStyle={{borderRadius: 15}}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="camera"
                        size={35}
                        color={COLORS.gray}
                        style={{
                          opacity: 0.7,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: '#fff',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
This is a cover photo that will display behind your business profile logo.
            </Text>

            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <TextButton
                disabled={!isValid}
                label="Continue"
                onPress={() => navigation.navigate(APP_ROUTES.vSetLocation)}
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

          <BottomSheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
              />
        </VendorLayout>

      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default vProfileCreation;
