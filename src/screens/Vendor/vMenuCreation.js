import {View, Text, TextInput} from 'react-native';
import React from 'react';
import VendorLayout from './VendorLayout';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const vMenuCreation = ({navigation}) => {
  const [selectedDish, setSelectedDish] = React.useState('');
  const [businessDescription, setBusinessDescription] = React.useState('');
  const [yesBtn, setYesBtn] = React.useState(true);
  const [noBtn, setNoBtn] = React.useState(false);



  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  function getLocation() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  // React.useEffect(() => {
  //   requestPermissions();
  //   getLocation();
  // }, []);

  return (
    <VendorLayout
      header="Business Profile"
      title="Menu/Goods Creation"
      titleContainerStyle={{paddingHorizontal: SIZES.padding * 2}}
      subtitle="Further build your business profile by completing the dish & cuisine category"
      backButton={() => navigation.goBack()}>
      <View style={{flex: 1, paddingHorizontal: SIZES.padding + 10}}>
        {/* Picker */}

        <View
          style={{
            marginTop: SIZES.padding,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.body4,
              marginLeft: SIZES.base,
            }}>
            Select dish category
          </Text>
          <Picker
            selectedValue={selectedDish}
            style={{
              height: 55,
              backgroundColor: COLORS.white,
              borderRadius: 10,
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDish(itemValue)
            }>
            <Picker.Item label="Dish 1" value="dish1" />
            <Picker.Item label="Dish 2" value="dish2" />
            <Picker.Item label="Dish 3" value="dish3" />
            <Picker.Item label="Dish 4" value="dish4" />
          </Picker>
          <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
            This will be the type of food or goods the business sells
          </Text>
        </View>

        {/* Description */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.body4,
              marginLeft: SIZES.base,
            }}>
            Business Description
          </Text>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={6}
          editable
          maxLength={450}
          style={{
            backgroundColor: COLORS.white,
            height: 150,
            textAlignVertical: 'top',
            borderRadius: SIZES.radius,
          }}
          placeholder="Describe your business in this section"
          value={businessDescription}
          onChangeText={text => setBusinessDescription(text)}
        />

        {/* Collection Available? */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.padding,
          }}>
          <View>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body4,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: SIZES.padding,
              }}>
              Collection Available?
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextButton
              label="Yes"
              labelStyle={{...FONTS.body4, color: COLORS.black}}
              onPress={() => setYesBtn(!yesBtn)}
              buttonContainerStyle={{
                height: 38,
                width: SIZES.width / 6,
                borderRadius: SIZES.base,
                backgroundColor: yesBtn ? COLORS.white : COLORS.transparentPrimary,
                borderColor: yesBtn ? COLORS.gray3 : COLORS.darkGray2,
                borderWidth: 1,
                marginRight: SIZES.radius,
              }}
            />
            <TextButton
              label="No"
              labelStyle={{...FONTS.body4, color: COLORS.black}}
              onPress={() => setNoBtn(!noBtn)}
              buttonContainerStyle={{
                height: 38,
                width: SIZES.width / 6,
                borderRadius: SIZES.base,
                backgroundColor: noBtn ? COLORS.white : COLORS.transparentPrimary,
                borderColor: noBtn ? COLORS.gray3 : COLORS.darkGray2,
                borderWidth: 1,
              }}
            />
          </View>
        </View>
        <Text style={{...FONTS.body5, marginVertical: SIZES.base}}>
          Do you want customers to be able to collect their purchased goods from the restaurant?
        </Text>

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TextButton
            label="Continue"
            onPress={() => navigation.navigate('Account')}
            disabled={!businessDescription}
            labelStyle={{...FONTS.body3, color: businessDescription ? COLORS.white2 : "#CBB4B4"}}
            buttonContainerStyle={{
              height: 50,
              width: SIZES.width / 2,
              marginTop: SIZES.padding,
              borderRadius: SIZES.base,
              borderWidth: 2,
              backgroundColor: businessDescription ? COLORS.primary : "#EBEBEB",
              borderColor: businessDescription ? COLORS.gray3 : "#CBB4B4",
            }}
          />
        </View>
      </View>
    </VendorLayout>
  );
};

export default vMenuCreation;
