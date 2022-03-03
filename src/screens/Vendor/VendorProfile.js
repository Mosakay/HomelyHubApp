import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';
import {APP_ROUTES} from '../../routes/router';
import {Avatar, Title, Caption, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VendorProfile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray3,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>Vendor Profile</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: COLORS.gray3,
          margin: SIZES.padding,
          padding: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <Image
          source={require('../../assets/images/user-profile.jpg')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 40,
            marginBottom: SIZES.base,
            marginTop: SIZES.base,
          }}
        />
        <View>
          <Text style={{...FONTS.h3, color: COLORS.black, textAlign: 'center'}}>
            Template Business Name
          </Text>
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.black,
              textAlign: 'center',
              marginBottom: SIZES.base,
            }}>
            African, English, Goods, Fresh
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: SIZES.radius,
            }}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{...FONTS.body4, color: COLORS.black}}>
              31 Heathway, London, LO69DN
            </Text>
          </View>

          <Text style={{...FONTS.body4, textAlign: 'center'}}>
            Just some random default text, Just some random default text, Just
            some random default text, Just some random default text,
          </Text>
        </View>
      </View>

      {/* TEXT INPUT */}
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          margin: SIZES.padding,
          padding: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        <TextButton
          label="Business Editor"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null,
            marginBottom: SIZES.radius,
          }}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons name="chevron-forward-outline" size={22} />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          onPress={() => navigation.navigate(APP_ROUTES.EditProfile)}
        />

        <TextButton
          label="Menu Builder"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null,
            marginBottom: SIZES.radius,
          }}
          appendComponent={<Ionicons name="navigate-outline" size={22} />}
          prependComponent={
            <Ionicons name="chevron-forward-outline" size={22} />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          onPress={() => navigation.navigate(APP_ROUTES.SavedAddress)}
        />

        <TextButton
          label="Review Management"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null,
            marginBottom: SIZES.radius,
          }}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons name="chevron-forward-outline" size={22} />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          onPress={() => navigation.navigate(APP_ROUTES.PaymentMethods)}
        />

        <TextButton
          label="Orders"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null,
            marginBottom: SIZES.radius,
          }}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons name="chevron-forward-outline" size={22} />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          onPress={() => navigation.navigate(APP_ROUTES.ContactPref)}
        />
        <TextButton
          label="Business Analytics"
          buttonContainerStyle={{backgroundColor: null, alignItems: null}}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons name="chevron-forward-outline" size={22} />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          onPress={() => navigation.navigate(APP_ROUTES.ContactPref)}
        />
      </View>
    </View>
  );
};

export default VendorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
