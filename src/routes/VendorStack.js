import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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


const Stack = createStackNavigator();

export const VendorStack = ({ navigation }) => {
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
