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
  Settings,
  CartTab,
  Account,
} from '../screens';
import EditProfile from '../screens/Account/EditProfile';
import SavedAddress from '../screens/Account/SavedAddress';
import PaymentMethods from '../screens/Account/PaymentMethods';
import ContactPref from '../screens/Account/ContactPref';
import {APP_ROUTES} from './router';
import {COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const AccountNavigation = ({navigation}) => {
  return (
      <Stack.Navigator
      initialRouteName='Account'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SavedAddress" component={SavedAddress} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="ContactPref" component={ContactPref} />
        <Stack.Screen name={"SignIn"} component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
      </Stack.Navigator>
  );
};


const Dashboard = ({navigation}) => {
  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.darkGray}
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: COLORS.white, padding: 5}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="restaurant-menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartTab}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
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
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
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

const AuthStack = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SignIn'}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name={"UserDashboard"} component={Dashboard} />
    </Stack.Navigator>

  )
}


const UserStack = () => {


  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name={APP_ROUTES.CustomerAuthStack} component={AuthStack} />
      <Stack.Screen name={APP_ROUTES.CustomerDashboard} component={Dashboard} />
    </Stack.Navigator>



  )
}

export default UserStack