import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, navigation}  from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaymentMethods = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray3,
          paddingRight: 80,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{}}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text
          style={{...FONTS.h3, color: COLORS.black,}}>
          Payment Method
        </Text>
      </View>
    <ScrollView>
    {/* payment metheds  could be more efficet by adding a loop witch checkes what payment methes are avalive and call it from a const so it auto updates*/}
    <View style={{justifyContent:'center'}}>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
        // pass in the prams to update the email assoaiated with the payment methed
            label="Test-Email@email.com"
            buttonContainerStyle={{margin: 5  , backgroundColor: COLORS.white, width: SIZES.width - 100,}}
            appendComponent={<FontAwesomeIcon name="cc-paypal" size={40} style={{alignSelf: 'flex-start',justifyContent:'flex-start', backgroundColor:COLORS.primary, padding: SIZES.padding - 15}} />}
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.primary , flex: 1}}
            // onPress={() => navigation.navigate('')}
          /> 
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
        // pass in the prams to update the email assoaiated with the payment methed
            label="Test-Email@email.com"
            buttonContainerStyle={{margin: 5  , backgroundColor: COLORS.white, width: SIZES.width - 100,}}
            appendComponent={<FontAwesomeIcon name="apple-pay" size={40} style={{alignSelf: 'flex-start',justifyContent:'flex-start', backgroundColor:COLORS.primary, padding: SIZES.padding - 15}} />}
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.primary , flex: 1}}
            // onPress={() => navigation.navigate('')}
          /> 
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
        // pass in the prams to update the email assoaiated with the payment methed
            label="Click hear to connect amazon pay"
            buttonContainerStyle={{margin: 5  , backgroundColor: COLORS.white, width: SIZES.width - 100,}}
            appendComponent={<FontAwesomeIcon name="amazon-pay" size={40} style={{ backgroundColor:COLORS.primary, padding: SIZES.padding - 15}} />}
            labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.primary}}
            // onPress={() => navigation.navigate('')}
          /> 
      </View>
    </View>


      {/* Continue button  */}
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <TextButton
        label="Continue"
        labelStyle={{...FONTS.body3}}
        buttonContainerStyle={{
          height: 55,
          width: SIZES.width - 200,
          marginTop: SIZES.padding,
          borderRadius: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
        />
      </View>
    </ScrollView>
    </View>
  );
};

export default PaymentMethods;