import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {FONTS, SIZES, COLORS} from '../constants';
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
    <View style={{...containerStyle}}>
      {/* Label & Error msg */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection:'row', alignContent:'center', alignItems:'center'}}>
        <MaterialIcons style={iconStyle} name={iconName} size={iconSize} color={iconColor}  />
        <Text style={{color: COLORS.black, ...FONTS.body4, marginLeft: SIZES.base}}>{label}</Text>
        </View>
        <Text style={{color: COLORS.red, ...FONTS.body5}}>{errorMsg}</Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...customInputStyle
        }}>

        {prependComponent}
        
        <TextInput
          style={{flex: 1, ...inputStyle}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
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
