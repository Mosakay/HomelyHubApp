import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import {TextButton} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler'; 

const CartTab = () => {
    return (
        <View style={{flex: 1}}>
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
          <ScrollView> 

    <View style={{flex: 1}}> 
      <View
        style={{
          justifyContent: 'center',
          height: SIZES.padding * 2,
          backgroundColor: COLORS.black,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.black,
          flexDirection:'row', 
          alignItems:'center'
        }}>
         <TextButton
          label="All Orders"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null, 
          }}
          />
          <Text style={{...FONTS.body3, color: COLORS.white}}>
          <Icon name="square" size={30} />
          </Text>
         <TextButton
          label="Pending"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null, 
          }}
        />
          <Text style={{...FONTS.body3, color: COLORS.white}}>
          <Icon name="square" size={30} />
          </Text>
         <TextButton
          label="Delivering"
          buttonContainerStyle={{
            backgroundColor: null,
            alignItems: null, 
          }}
        />
          <Text style={{...FONTS.body3, color: COLORS.white}}>
          <Icon name="square" size={30} />
          </Text>
      </View>
      </View>
           
          </ScrollView>
          </View>
  );
};

export default CartTab;