import React from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { abs } from 'react-native-reanimated';
import { Button } from './HomeButtonComponent.js'; 
import { ListComponent } from './HomeListComponent.js'; 


const Home = ({navigation}) => {

    return(
        <View
            style={{
                flex: 1,
            }}
        >
            {/* check/progress bar */}
            <View
                style={{
                    height: '15%',
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
                        color:COLORS.black,
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
            <View>
                {/* <Button onClick={renderFooter} text="Call Component"/> */}

                {/* <ListComponent text="Sample Component"/> */}
                {/* <ListComponent 
                text="Sample Component"
                    style={{
                        color:COLORS.white,
                        fontSize: 15,
                        fontFamily: 'Helvetica',
                        backgroundColor: COLORS.darkBlue,
                        borderRadius: 15,
                        padding: 10,
                        margin: 10,
                    }}
                /> */}
            </View>
            

            {/* button to add new item */}
            <View
                style={{
                    position: 'absolute',
                    height: 40,
                    left: 0, 
                    bottom:20, 
                    width: SIZES.width,
                }}
            >
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
                    // onPress={() => navigation.Button}
                    onPress={() => navigation.navigate('Button')}
                  />
            </View>
        </View>
    );

};

export default Home;