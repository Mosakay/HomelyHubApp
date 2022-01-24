import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants';


const TextButton = ({label, buttonContainerStyle, disabled, labelStyle, onPress, iconColor, iconName, iconSize }) => {
    return (
        <TouchableOpacity
        style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: COLORS.green2, 
            ...buttonContainerStyle
        }}
        disabled={disabled}
        onPress={onPress}
        >
            <View style={{flexDirection:'row'}}>
            <Text
            style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...labelStyle
            }}
            >
                {label} 
            </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextButton;
