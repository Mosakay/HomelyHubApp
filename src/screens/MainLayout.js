import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {Home, Settings, Notification, Favourite, CartTab} from '.';
import {COLORS, SIZES, FONTS, constants, icons } from '../constants';

const MainLayout = ({navigation}) => {



  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Text>MainLayout</Text>

      {/* Bottom Navigation */}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.radius,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>


      </View>
    </View>
  );
};

export default MainLayout;
