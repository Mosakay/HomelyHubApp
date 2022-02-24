import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  iconStyle,
  iconName,
  iconSize,
  iconColor,
  onChangeText,
  onBlur,
  value,
  customInputStyle,
  multiline,
  numberOfLines,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* Label & Error msg */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons
            style={iconStyle}
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
          <Text
            style={{
              color: appTheme?.COLORS.black,
              ...appTheme?.FONTS.body4,
              marginLeft: appTheme?.SIZES.base,
            }}>
            {label}
          </Text>
        </View>
        <Text style={{ color: appTheme?.COLORS.red, ...appTheme?.FONTS.body5 }}>
          {errorMsg}
        </Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 50,
          paddingHorizontal: appTheme?.SIZES.padding,
          marginTop: appTheme?.SIZES.base,
          borderRadius: appTheme?.SIZES.radius,
          backgroundColor: appTheme?.COLORS.lightGray2,
          ...customInputStyle,
        }}>
        {prependComponent}

        <TextInput
          style={{ flex: 1, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={appTheme?.COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          // onChangeText={(text) => onChange(text)}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          // iconColor={iconColor}
          // iconSize={iconSize}
          // iconName={iconName}
          // iconStyle={iconStyle}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
