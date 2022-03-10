import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  vForgotPassword,
} from '../screens';
import {APP_ROUTES} from '../routes/router';
import {COLORS} from '../constants';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_ROUTES.Vendor_Login} component={Login} />
      <Stack.Screen name={APP_ROUTES.Register} component={Register} />
      <Stack.Screen name={APP_ROUTES.Register2} component={Register2} />
      <Stack.Screen name={APP_ROUTES.vMenuCreation} component={vMenuCreation} />
      <Stack.Screen
        name={APP_ROUTES.vProfileCreation}
        component={vProfileCreation}
      />
      <Stack.Screen name={APP_ROUTES.vSetLocation} component={vSetLocation} />
      <Stack.Screen
        name={APP_ROUTES.vForgotPassword}
        component={vForgotPassword}
      />
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
      {/* <Tab.Screen
        name="My Account"
        component={AccountNavigation}
        options={{
          title: 'My Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      /> */}
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

const VendorStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_ROUTES.VendorAuthStack} component={AuthStack} />
      <Stack.Screen name={APP_ROUTES.VendorDashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default VendorStack;
