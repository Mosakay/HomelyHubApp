import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {TextButton} from '../../components';

const Otp = ({navigation}) => {
  return (
    <AuthLayout
      title="Verify Account"
      subtitle="An authentication code has been sent to your email"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>


      {/* OTP FormInput */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>

      </View>


      {/* Footer */}


    </AuthLayout>
  );
};

export default Otp;
