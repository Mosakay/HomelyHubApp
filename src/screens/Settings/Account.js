import React from 'react'
import { View, Text} from 'react-native'
import {Navigation} from '@react-navigation/native';
import { TextButton } from '../../components';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Account = () => {
    return (
        
        <View style={{

        }}>
            {/* if user is loged in */}
            <View style={{
            }}>
                <Text style={{
                    padding: 22,
                    backgroundColor:Colors.white,
                    fontSize: SIZES.body2,
                    alignItem: 'center',
                    color: COLORS.black,
                    justifyContent: 'flex-start'
                }}>My Account</Text>
            </View>
            <View>
                <Text style={{
                    padding: 22,
                    backgroundColor:Colors.white,
                    fontSize: SIZES.body2,
                    alignItem: 'center',
                    color: COLORS.black,
                    justifyContent: 'flex-start',
                    bordertop: 5,
                }}>
                    Welcome {/*{User.name}*/}
                </Text>
            </View>
            <View>
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
                    iconName="bell"
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
                onPress={() => navigation.navigate('')}
            />
            </View>
            {/* if user is not loged in */}
        </View>
    )
}

export default Account
