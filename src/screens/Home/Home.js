import React from 'react';
import {
    View,
    Text,
    Alert,
    useState,
    Image,
    StyleSheet,
    Button,
    // List
} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Oct from 'react-native-vector-icons/Octicons'
import { ListComponent } from './HomeListComponent.js'; 

_onPressButton = () => {
    alert('You tapped the button!')
        
    // on press actrvate my menu deactavate preview and publsh and vice verser 
    // change button form  fninsh editing and publish menu to new item and vice veverser
    // active class styleing 

    // not active class styleing

    // button change based on active class 
    // use state
    

  }

const Home = () => {

    return(
        <View
            style={{
                flex:1
            }}
        >
            {/* bussiness title and cover  */}
            <View>
                {/* cover if loged in show bussness cover. useing template image for placeholder */}
                <View>
                    <Image
                        style={{
                            width: SIZES.width,
                            height: SIZES.largeTitle *3,     
                        }}
                        source={{uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg'}}
                    />
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        // alignItems:'space-between',
                    }}
                >
                    {/* logo */}
                    <View                    style={{
                        justifyContent: 'center',
                        alignItems:'center',
                    }}>
                        <Image
                            style={{
                                width: SIZES.largeTitle *2,
                                height: SIZES.largeTitle *2,
                                top:-20,
                            }}
                            source={{uri: 'https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM='}}
                        />
                    </View>
                    {/* help button */}
                    <View
                        style={{
                           alignSelf:'flex-end',
                           top: -70,
                           paddingRight:SIZES.padding, 
                        }}
                    >
                    <TextButton
                        label="Help"
                        buttonContainerStyle={{
                            backgroundColor:null,

                        }}
                        prependComponent={
                            <Oct name="question" style={{
                                color:COLORS.primary,
                                fontSize:SIZES.body2,
                                marginLeft: 5,
                            }}
                            />
                        }
                        labelStyle={{
                        fontSize:SIZES.font,
                        color: COLORS.primary,
                        }}
                        // onPress={() => navigation.Button}
                        onPress={() => console.log('yo')}
                        
                    />
                    </View>                    
                </View>

                {/* Business name */}
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems:'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.h2,
                            fontWeight:'bold',
                        }}
                    >
                        Business name here
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        paddingTop:SIZES.padding + 1/2,
                    }}
                >
                    {/*  menu button */}

                    <TextButton
                        label="MY MENU"
                        buttonContainerStyle={{
                            backgroundColor:null,
                            width:'45%'
                        }}
                        labelStyle={{
                        fontSize:SIZES.font,
                        color: COLORS.gray,
                        }}
                        // onPress={() => navigation.navagate('HomeListComponet')}
                        onPress={() => console.log('yo im active')}
                        // onPress={this._onPressButton}
                    />


                    {/* preview and publish */}

                    <TextButton
                        label="PREVIEW & PUBLISH"
                        buttonContainerStyle={{
                            backgroundColor:null,
                            width:'50%'
                        }}
                        labelStyle={{
                        fontSize:SIZES.font,
                        color: COLORS.gray,
                        }}
                        // onPress={() => navigation.Button}
                        onPress={() => console.log('yo im now active')}
                        // onPress={this._onPressButton}
                    />
                </View>


            </View>
            <View>
                {/* append the overlay of the item add for the list */}
            </View>

            {/* list of items */}
            <View>
                {/* add a fliter */}
                {/* add checker if on my menu or perview and finsih */}
                {/* <List>

                </List> */}
                
            </View>

            {/* button to add new item */}
            <View
                style={{
                    position: 'absolute',
                    bottom:40, 
                    width: SIZES.width,
                }}
            >
                <TextButton
                    label="New Item"

                    buttonContainerStyle={{
                      paddingVertical: SIZES.padding - 5, 
                    //   backgroundColor:COLORS.white,
                      width: '80%',
                      justifyContent:'center',
                      alignSelf:'center',
                                            
                    }}
                    appendComponent={
                        <Icon name="add-circle-outline" style={{
                            color:COLORS.white,
                            fontSize:SIZES.body2,
                            paddingRight: SIZES.padding - 10,
                        }}
                        />
                    }
                    labelStyle={{
                      ...FONTS.body2,
                    //   paddingVertical: SIZES.padding, 
                    }}
                    // onPress={() => navigation.Bu0tton}
                    onPress={() => console.log('yo')}
                  />
            </View>
        </View>
    );

};

export default Home;
