import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FONTS, COLORS } from '../constants';


const TextButton = ({label, buttonContainerStyle, disabled, labelStyle, onPress }) => {
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
            <Text
            style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...labelStyle
            }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;
