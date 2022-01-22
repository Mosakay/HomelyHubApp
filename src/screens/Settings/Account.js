import React from 'react'
import { View, Text, Image} from 'react-native'
import {Navigation} from '@react-navigation/native';
import { TextButton } from '../../components';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements';

const Account = () => {
    return (
        
        <View style={{
            flex: 1,

        }}>
            {/* if user is loged in */}
            <View style={{
                backgroundColor: COLORS.white,
            }}>
                <Text style={{
                    padding:22,
                    alignSelf: 'center',
                    backgroundColor:Colors.white,
                    fontSize: SIZES.body2,
                    color: COLORS.black,
                    justifyContent: 'flex-end'
                }}>My Account</Text>
            </View>
            <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.darkGray,
                
            }}/>
            <View sytle={{
                paddingTop: 22,
                backgroundColor:Colors.white,
                justifyContent: 'flex-start',
                borderWidth: 1,
                borderColor: "thistle",
                borderRadius: 50,
                paddingLeft:30,
                paddingRight:30,
                textShadowColor:'#585858',
                textShadowOffset:{width: 5, height: 5},
                textShadowRadius:10,

                flex: 1
            }}>
                <Image source={require('../../assets/images/bg.png')} 
                    style={{
                        width: 40, 
                        height: 40,
                        // justifyContent: 'center',
                        // alignSelf:'center'
                    }}/>
                    {/* user profle pic called from backend */}
                <View>
                    <Text style={{   
                        alignSelf: 'center',
                        color: COLORS.black,
                        fontSize: SIZES.body3,
                    
                    }}>
                        Welcome 
                    </Text>
                    <Text style={{
                        color: COLORS.black,
                        alignSelf: 'center',
                        fontSize: SIZES.body2, 
                    }}>
                        Username here {/*{User.name}*/}
                    </Text>
                </View>
                <View style={{
                    borderTopWidth: 1,
                    borderTopColor: COLORS.darkGray,
                
            }}/>
            </View>
            <View>
                <View
                style={{}}>
                    <MaterialIcons
                        iconName="person-outline"
                        iconSize={38}
                        labelStyle={{
                            color: COLORS.black,
                            // justifyContent:'flex-start',
                        }}>personoutlineempty md-38</MaterialIcons>
                    <TextButton
                        iconName="person-outline"
                        label="Edit Profile"
                        iconSize={24}
                        labelStyle={{
                            color: COLORS.black,
                            justifyContent:'flex-start',
                        }}
                        buttonContainerStyle={{
                            backgroundColor: COLORS.white,
                            height: 50,
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            // flexDirection:'row-reverse'
                        }}
                    />
                </View>
                
                <TextButton
                    iconName="push-pin"
                    label="Saved Addresses"
                    iconSize={24}
                    labelStyle={{
                        color: COLORS.black,
                    }}
                    buttonContainerStyle={{
                        backgroundColor: COLORS.white,
                        height: 50,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                />
                <TextButton
                // bell icon
                    iconName="login"
                    label="Contact Preferences"
                    iconSize={24}
                    labelStyle={{
                        color: COLORS.black,
                    }}
                    buttonContainerStyle={{                        
                        backgroundColor: COLORS.white,
                        height: 50,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                />
                <TextButton
                    iconName="login"
                    label="Sign Out"
                    iconSize={24}
                    labelStyle={{
                        color: COLORS.black,
                    }}
                    buttonContainerStyle={{
                        backgroundColor: COLORS.white,
                        height: 50,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                />
            </View>
             <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                justifyContent: 'center',
              }}>
            <TextButton
                iconName="headset-mic"
                iconSize={24}
                iconStyle={{
                    paddingRight: SIZES.base,
                    justifyContent: 'flex-start',
                    alignItems:'flex-start',
                }}
                label="Click here for help"
                labelStyle={{
                    justifyContent: 'flex-end'
                }}
                buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: SIZES.padding * 2,
                    borderRadius: SIZES.radius + 5,
                    backgroundColor: COLORS.primary,
                  }}
                // onPress={() => navigation.navigate('')}
            />
            </View>
            {/* if user is not loged in */}
        </View>
    )
}

export default Account