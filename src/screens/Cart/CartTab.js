import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';

const CartTab = () => {
  return (
    <View style={{flex: 1}}>
      {/* HEADER */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray3,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>Orders</Text>
      </View>

      {/* SECTION */}
        <View>
            
        </View>
    </View>
  );
};

export default CartTab;
