import React from 'react';
import { TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, constants, icons } from '../constants';
import {
  Home,
  Settings,
  Notification,
  Favourite,
  CartTab,
  Account,
  Login,
  Register,
  Register2,
  vMenuCreation,
  vProfileCreation,
  vSetLocation,
  SignIn,
  SignUp,
  SignUp2,
  ForgotPassword,
  vForgotPassword,
  AuthStack,
} from '../screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import EditProfile from '../screens/Account/EditProfile';
import SavedAddress from '../screens/Account/SavedAddress';
import PaymentMethods from '../screens/Account/PaymentMethods';
import ContactPref from '../screens/Account/ContactPref';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const vendorStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="vMenuCreation" component={vMenuCreation} />
      <Stack.Screen name="vProfileCreation" component={vProfileCreation} />
      <Stack.Screen name="vSetLocation" component={vSetLocation} />
      <Stack.Screen name="vForgotPassword" component={vForgotPassword} />
    </Stack.Navigator>
  );
};

const AccountNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SavedAddress" component={SavedAddress} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="ContactPref" component={ContactPref} />
      <Stack.Screen name="vendorStack" component={vendorStack} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
    </Stack.Navigator>
  );
};

// export default AccountNavigation;

const AppStack = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.darkGray}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: COLORS.white, padding: 5 }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartTab}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="reorder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={AccountNavigation}
        options={{
          title: 'My Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
