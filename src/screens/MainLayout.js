import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, FONTS, constants, icons} from '../constants';
import {Home, Settings, Notification, Favourite, CartTab, Account} from '.';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const MainLayout = ({navigation}) => {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={COLORS.primary}
        inactiveColor={COLORS.transparentPrimary}
        labelStyle={{fontSize: 12}}
        barStyle={{backgroundColor: COLORS.gray3}}>
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
          name="Account"
          component={Account}
          options={{
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
    </NavigationContainer>
  );
};

export default MainLayout;
