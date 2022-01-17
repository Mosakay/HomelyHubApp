import React from 'react'
import { View, Text } from 'react-native'
import {Navigation} from '@react-navigation/native';
import { TextButton } from '../../components';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Account = () => {
    return (
        
        <View>
            {/* if user is loged in */}
            <Text>My Account</Text>
            <Text>
                Welcome {/*{User.name}*/}
            </Text>
            <TextButton
                label="Edit Profile"
                labelStyle={{
                    color: COLORS.black,
                    justifyContent:'flex-start',
                }}
                buttonContainerStyle={{
                    backgroundColor: COLORS.white,
                    justifyContent:'flex-start',
                  }}
            />
            <TextButton
                label="Saved Addresses"
                labelStyle={{
                    color: COLORS.black,
                }}
                buttonContainerStyle={{
                    backgroundColor: COLORS.white,
                  }}
            />
            <TextButton
                label="Contact Preferences"
                labelStyle={{
                    color: COLORS.black,
                }}
                buttonContainerStyle={{
                    backgroundColor: COLORS.white,
                  }}
            />
            <TextButton
                label="Sign Out"
                labelStyle={{
                    color: COLORS.black,
                }}
                buttonContainerStyle={{
                    backgroundColor: COLORS.white,
                  }}
            />
            <TextButton
                label="Click here for help"
                buttonContainerStyle={{
                    height: 50,
                    width: SIZES.width / 2,
                    alignItems: 'center',
                    marginTop: SIZES.padding * 2,
                    borderRadius: SIZES.radius + 5,
                    backgroundColor: COLORS.primary,
                  }}
                onPress={() => navigation.navigate('')}
            />
            {/* if user is not loged in */}
        </View>
    )
}

export default Account
