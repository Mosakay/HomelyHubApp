import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { appTheme } from '../../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VendorLayout = ({
  title,
  subtitle,
  titleContainerStyle,
  children,
  header,
  navigation,
  backButton,
  formInput,
}) => {
  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          flex: 1,
        }}>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flex: 1,
          }}>
          {/* Header */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: appTheme?.SIZES.padding * 2.5,
              backgroundColor: appTheme?.COLORS.white,
              borderBottomWidth: 2,
              borderBottomColor: appTheme?.COLORS.gray3,
            }}>
            <Text
              style={{
                ...appTheme?.FONTS.h3,
                color: appTheme?.COLORS.black,
                marginTop: appTheme?.SIZES.padding,
              }}>
              {header}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={backButton}
              style={{
                marginTop: appTheme?.SIZES.radius,
                marginLeft: appTheme?.SIZES.radius,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="arrow-back"
                size={24}
                color={appTheme?.COLORS.black}
              />
              <Text
                style={{
                  ...appTheme?.FONTS.body5,
                  color: appTheme?.COLORS.black,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>

          {/* Title & Subtitle */}
          <View
            style={{
              // marginTop: appTheme?.SIZES.base,
              ...titleContainerStyle,
            }}>
            <Text
              style={{
                textAlign: 'center',
                ...appTheme?.FONTS.h2,
                color: appTheme?.COLORS.black,
                paddingTop: appTheme?.SIZES.radius,
              }}>
              {title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                ...appTheme?.FONTS.body3,
                marginTop: appTheme?.SIZES.base,
                color: appTheme?.COLORS.darkGray,
              }}>
              {subtitle}
            </Text>
          </View>

          {/*  FORM INPUTS */}
          <View style={{ paddingHorizontal: appTheme?.SIZES.padding + 10 }}>
            {formInput}
          </View>
          {/* Footer */}

          {/* Content / Children */}
          {children}
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default VendorLayout;
