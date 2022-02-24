import React from 'react';
import { View, Text, Image } from 'react-native';
import appTheme from '../../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: appTheme.COLORS.white }}>
      <View
        style={{
          flex: 1,
          backgroundColor: appTheme.COLORS.white,
          paddingVertical: appTheme.SIZES.padding,
        }}>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: appTheme.SIZES.padding,
            backgroundColor: appTheme.COLORS.white,
          }}>
          {/* App Icon */}

          {/* <View
        style={{
            alignItems:'center'
            
        }}
        >
            <Image 
            source={images.logo_01}
            // resizeMode='contain'
            style={{
                height: 100,
                width: 200
            }}
            />
        </View> */}

          {/* Title & Subtitle */}
          <View
            style={{
              marginTop: appTheme.SIZES.base,
              ...titleContainerStyle,
            }}>
            <Text
              style={{
                textAlign: 'center',
                ...appTheme.FONTS.h2,
                color: appTheme.COLORS.black,
              }}>
              {title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                ...appTheme.FONTS.body3,
                marginTop: appTheme.SIZES.base,
                color: appTheme.COLORS.darkGray,
              }}>
              {subtitle}
            </Text>
          </View>

          {/* Content / Children */}
          {children}
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthLayout;
