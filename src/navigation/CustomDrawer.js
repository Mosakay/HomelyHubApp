import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MainLayout} from '../screens';
import {COLORS, SIZES, FONTS, constants, icons, dummyData} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
   


      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <NavigationContainer independent="true">
        <Drawer.Navigator
          screenOptions={{
            overlayColor: 'transparent',
            drawerStyle: {
              flex: 1,
              width: '65%',
              paddingRight: 20,
              backgroundColor: 'transparent',
            },
            drawerType: 'slide',
            sceneContainerStyle: {
              backgroundColor: 'transparent',
            },
          }}
          initialRouteName="MainLayout"
          drawerContent={props => {
            return <CustomDrawerContent navigation={props.navigation} />;
          }}>
          <Drawer.Screen name="Home">
            {props => <MainLayout {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default CustomDrawer;
