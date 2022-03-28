import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* check/progress bar */}
            <View
                style={{
                    height: '20%',
                    backgroundColor:COLORS.black,
                }}
            >

            </View>
            {/* adding in the item */}
            <View
                style={{
                    backgroundColor:COLORS.primary,
                    width: '80%',
                    justifyContent:'center',
                    alignSelf:'center',
                }}
            >
                <Text
                    style={{
                        color:COLORS.white,
                        fontSize:SIZES.body2,
                        justifyContent:'center',
                        alignSelf:'center',
                        paddingVertical:SIZES.padding -15,
                    }}
                >
                    Adding an item
                </Text>
                <View
                    style={{
                        backgroundColor:COLORS.white,
                        height: '5%',
                        width: '80%',
                        justifyContent:'center',
                        alignSelf:'center',
                    }}
                >
                    {/* icon */}

                </View>
                <Text
                    style={{
                        color:COLORS.white,
                        fontSize:SIZES.body5,
                        justifyContent:'center',
                        alignSelf:'center',
                        width:'80%',
                        paddingVertical:SIZES.padding -15,
                    }}
                >
                    Click the '+' button below to get started with bulding your story by adding an item.
                </Text>
            </View>
            {/* button to add new item */}
            <View>
                <TextButton
                    label="New Item"
                    buttonContainerStyle={{
                      paddingVertical: 5, 
                      backgroundColor:COLORS.white,
                      width: '80%',
                      justifyContent:'center',
                      alignSelf:'center',
                                            
                    }}
                    appendComponent={
                        <Icon name="add-circle-outline" style={{
                            color:COLORS.primary,
                            fontSize:SIZES.body2,
                            paddingRight: SIZES.padding - 10,
                        }}
                        />
                    }
                    labelStyle={{
                      ...FONTS.body2,
                      color: COLORS.primary,
                    }}
                  />

            </View>

        </View>
    );
}

export default Home;