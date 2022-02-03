import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TextButton} from '../../components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PaymentMethods = ({navigation}) => {
  const [paypal, setPaypal] = React.useState(false);
  const [applePay, setApplePay] = React.useState(false);
  const [amazonPay, setAmazonPay] = React.useState(false);

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
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: SIZES.padding}}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>Payment Method</Text>
      </View>
      <ScrollView>
        {/* payment metheds  could be more efficet by adding a loop witch checkes what payment methes are avalive and call it from a const so it auto updates*/}
        <View style={{justifyContent: 'center', paddingTop: 20}}>
          <View style={{justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}>
            <TextButton
              // pass in the prams to update the email assoaiated with the payment methed
              label={ !paypal ? "Click here to connect PayPal" : "PayPal connected to account"}
              buttonContainerStyle={{
                margin: 5,
                backgroundColor: COLORS.white,
                width: SIZES.width - 100,
              }}
              onPress={() => setPaypal(!paypal)}
              appendComponent={
                <FontAwesomeIcon
                  name="cc-paypal"
                  size={40}
                  style={{
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: paypal ? COLORS.primary : COLORS.gray,
                    padding: SIZES.padding - 15,
                    maxWidth: 200,
                  }}
                />
              }
              labelStyle={{
                marginLeft: 5,
                ...FONTS.body5,
                color: paypal ? COLORS.primary : COLORS.gray,
                flex: 1,
              }}
            />

            

            <TextButton
              // pass in the prams to update the email assoaiated with the payment methed
              label={!applePay ? "Click here to connect ApplePay to account" : "ApplePay connected to account"}
              buttonContainerStyle={{
                margin: 5,
                backgroundColor: COLORS.white,
                width: SIZES.width - 100,
              }}
              onPress={() => setApplePay(!applePay)}
              appendComponent={
                <FontAwesomeIcon
                  name="cc-apple-pay"
                  size={40}
                  style={{
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: applePay ? COLORS.primary : COLORS.gray,
                    padding: SIZES.padding - 15,
                    maxWidth: 200,
                  }}
                />
              }
              labelStyle={{
                marginLeft: 5,
                ...FONTS.body5,
                color: applePay ? COLORS.primary : COLORS.darkGray,
                flex: 1,
              }}
            />

            <TextButton
              // pass in the prams to update the email assoaiated with the payment methed
              label={!amazonPay ? "Click here to connect Amazon to account" : "Amazon Pay connected to account"}
              buttonContainerStyle={{
                margin: 5,
                backgroundColor: COLORS.white,
                width: SIZES.width - 100,
              }}
              onPress={() => setAmazonPay(!amazonPay)}
              appendComponent={
                <FontAwesomeIcon
                  name="cc-amazon-pay"
                  size={40}
                  style={{
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: amazonPay ? COLORS.primary : COLORS.gray,
                    padding: SIZES.padding - 15,
                    maxWidth: 200,
                  }}
                />
              }
              labelStyle={{
                marginLeft: 5,
                ...FONTS.body5,
                color: amazonPay ? COLORS.primary : COLORS.darkGray,
                flex: 1,
              }}
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