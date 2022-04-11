import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  SignIn,
  SignUp,
  SignUp2,
  ForgotPassword,
  Otp,
  Home,
  UserSettings,
  CartTab,
  Account,
  VendorProfile,
  CustomerSupport,
  UserOrVendor,
  ConstactUs,
  Legal,
  Feedback,
  GettingStarted,
} from '../screens';
import EditProfile from '../screens/Account/EditProfile';
import SavedAddress from '../screens/Account/SavedAddress';
import PaymentMethods from '../screens/Account/PaymentMethods';
import ContactPref from '../screens/Account/ContactPref';
import {APP_ROUTES} from './router';
import {COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactUs from '../screens/CustomerSupport/ContactUs';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AccountNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={APP_ROUTES.UserAccount}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_ROUTES.UserAccount} component={Account} />
      <Stack.Screen name={APP_ROUTES.EditProfile} component={EditProfile} />
      <Stack.Screen name={APP_ROUTES.SavedAddress} component={SavedAddress} />
      <Stack.Screen
        name={APP_ROUTES.PaymentMethods}
        component={PaymentMethods}
      />
      <Stack.Screen name={APP_ROUTES.ContactPref} component={ContactPref} />
      <Stack.Screen
        name={APP_ROUTES.CustomerSupport}
        component={CustomerSupport}
      />
      <Stack.Screen name={APP_ROUTES.Legal} component={Legal} />
      <Stack.Screen name={APP_ROUTES.ContactUs} component={ContactUs} />
      <Stack.Screen name={APP_ROUTES.Feedback} component={Feedback} />
      <Stack.Screen
        name={APP_ROUTES.GettingStarted}
        component={GettingStarted}
      />
    </Stack.Navigator>
  );
};

const CustomerDashboard = ({navigation}) => { 
  return (
    <Tab.Navigator
      initialRouteName={APP_ROUTES.UserHome}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.darkGray}
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: COLORS.white, padding: 5}}>
      <Tab.Screen
        name={APP_ROUTES.UserHome}
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="restaurant-menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.Orders}
        component={CartTab}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="reorder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.NavAccount}
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.UserSettings}
        component={UserSettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

const CustomerAuthStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.SignIn}>
        <Stack.Screen name={APP_ROUTES.SignIn} component={SignIn} />
        <Stack.Screen name={APP_ROUTES.SignUp} component={SignUp} />
        <Stack.Screen name={APP_ROUTES.SignUp2} component={SignUp2} />
        <Stack.Screen
          name={APP_ROUTES.ForgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen name={APP_ROUTES.OTP} component={Otp} />
        <Stack.Screen
          name={APP_ROUTES.CustomerDashboard}
          component={CustomerDashboard}
        />
      </Stack.Navigator>
  );
};

const UserStack = () => {
  const [skipLoginPage, setSkipLoginPage] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('skipLogin').then(value => {
      if (value == null) {
        AsyncStorage.setItem('skipLogin', 'true');
        setSkipLoginPage(true);
      } else {
        setSkipLoginPage(false);
      }
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={APP_ROUTES.CustomerDashboard}>
      <Stack.Screen
        name={APP_ROUTES.CustomerAuthStack}
        component={CustomerAuthStack}
      />
      <Stack.Screen
        name={APP_ROUTES.CustomerDashboard}
        component={CustomerDashboard}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
