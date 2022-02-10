import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {images, FONTS, SIZES, COLORS} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

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
    <View
    style={{
        flex: 1,
    }}
    >
      <ScrollView>
      <KeyboardAwareScrollView
      keyboardDismissMode='on-drag'
      contentContainerStyle={{
          flex: 1,
      }}
      >


      {/* Header */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: SIZES.padding * 2.5,
          backgroundColor: COLORS.white,
          borderBottomWidth: 2,
          borderBottomColor: COLORS.gray3,
        }}>
        <Text
          style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
          {header}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={backButton}
          style={{
            marginTop: SIZES.radius,
            marginLeft: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="arrow-back" size={24} color={COLORS.black} />
          <Text style={{...FONTS.body5, color: COLORS.black}}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Subtitle */}
      <View
        style={{
          // marginTop: SIZES.base,
          ...titleContainerStyle,
        }}>
        <Text style={{textAlign: 'center', ...FONTS.h2, color: COLORS.black, paddingTop: SIZES.radius}}>
          {title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            ...FONTS.body3,
            marginTop: SIZES.base,
            color: COLORS.darkGray,
          }}>
          {subtitle}
        </Text>
      </View>

      {/*  FORM INPUTS */}
<View style={{paddingHorizontal: SIZES.padding + 10}}>
      {formInput}
      </View>
      {/* Footer */}

      {/* Content / Children */}
      {children}
      </KeyboardAwareScrollView>  
      </ScrollView>
        </View>
  );
};

export default VendorLayout;
