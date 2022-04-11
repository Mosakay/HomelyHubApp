import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthLayout } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import useUserType from '../../hooks/useUserType';
// import { userTypeAction } from '../../store/StoreSlice';
import { APP_ROUTES, CUSTOMER_OR_VENDOR } from '../../routes/router';

const UserOrVendor = () => {
  const navigation = useNavigation();
//   const userType = useUserType();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log(userType);
//   }, [userType]);

  const handleVendorClick = () => {
    // dispatch(userTypeAction(CUSTOMER_OR_VENDOR.Vendor));
    navigation.navigate(APP_ROUTES.VendorStack);
  };

  const handleCustomerClick = () => {
    // dispatch(userTypeAction(CUSTOMER_OR_VENDOR.Customer));
    navigation.navigate(APP_ROUTES.UserStack);
  };

  return (
    <AuthLayout
      title="Are you a Vendor or a Customer ?"
      subtitle="It seems you are yet to select Option !">
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          padding: 8,
        }}>
        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={handleCustomerClick}>
          <Image
            style={styles.images}
            source={require('../../assets/images/Account_Circle.png')}
          />
          <Text>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={handleVendorClick}>
          <Image
            style={styles.images}
            source={require('../../assets/images/Business.png')}
          />
          <Text>Vendor</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>
    </AuthLayout>
  );
};
const styles = StyleSheet.create({
  images: {
    width: 100,
    height: 100,
    margin: 5,
    resizeMode: 'stretch',
  },
  touchableStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default UserOrVendor;