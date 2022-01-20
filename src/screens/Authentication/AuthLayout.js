import React from 'react'
import { View, Text, Image } from 'react-native'

import { images, FONTS, SIZES, COLORS } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
    return (
        <KeyboardAwareScrollView>
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingVertical: SIZES.padding
        }}
        >
          <KeyboardAwareScrollView
          keyboardDismissMode='on-drag'
          contentContainerStyle={{
              flex: 1,
              paddingHorizontal: SIZES.padding

          }}
          >

        {/* App Icon */}

        <View
        style={{
            alignItems:'center'
            
        }}
        >
            <Image 
            source={images.logo_01}
            resizeMode='contain'
            style={{
                height: 100,
                width: 200
            }}
            />
        </View>

        {/* Title & Subtitle */}
            <View
            style={{
                marginTop: SIZES.base,
                ...titleContainerStyle
            }}
            >
            <Text style={{textAlign:'center', ...FONTS.h2, color: COLORS.black}}>{title}</Text>
            <Text style={{textAlign:'center', ...FONTS.body3, marginTop: SIZES.base, color: COLORS.darkGray }}>{subtitle}</Text>

            </View>



        {/* Content / Children */}
            {children}
        </KeyboardAwareScrollView>  

        </View>
        </KeyboardAwareScrollView>
    )
}

export default AuthLayout;
