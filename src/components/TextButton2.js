import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const TextButton2 = ({label, buttonContainerStyle, disabled, labelStyle, onPress, iconColor, iconName, iconSize }) => {
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
                <MaterialIcons
                style={{paddingHorizontal: SIZES.base}}
                name={iconName}
                size={iconSize}
                color={iconColor}
                />
                <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    ...labelStyle
                }}
                >
                    {label} 
                </Text>   <MaterialIcons
                style={{paddingHorizontal: SIZES.base}}
                name={iconName}
                size={iconSize}
                color={iconColor}
                />
            
            </View>
        </TouchableOpacity>
    )
}

export default TextButton2;
