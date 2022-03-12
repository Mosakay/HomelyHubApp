import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Checkbox, Searchbar} from 'react-native-paper';


const ContactUs = ({navigation, props}) => {

    // const [value, onChangeText] = React.useState('fke');

  return (
    // onPress=
    <View style={{flex: 1}}>
      {/* HEADER */}
      <ScrollView>
        <View
            style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: SIZES.padding * 3,
            backgroundColor: COLORS.white,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray3,
            paddingRight: 105,
            }}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginTop: SIZES.padding}}>
            <Icon name="arrow-back" size={25} />
            </TouchableOpacity>
            <Text
            style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
            Contact Us
            </Text>
        </View>
        {/* phone number */}
        <View style={{
                paddingTop:SIZES.padding,
                width:SIZES.width -30,
                paddingLeft:SIZES.padding
            }}>
            <View>
                <Text style={{
                    fontSize:SIZES.h2,
                    fontWeight:'bold',
                    color:COLORS.black,
                }}>
                    Phone Line: 07111 111 111
                </Text>
                <Text style={{
                    fontSize:SIZES.h5,
                }}>
                    Call this help line to get in touch with one of our oparatiors.
                </Text>
            </View>
        </View>
        
        {/* email */}
        <View style={{
                paddingTop:SIZES.padding,
                width:SIZES.width -30,
                paddingLeft:SIZES.padding
            }}>
            <View style={{
            }}>
                <Text style={{
                    fontSize:SIZES.h2,
                    fontWeight:'bold',
                    color:COLORS.black,
                }}>
                    Email
                </Text>
                <Text style={{
                    fontSize:SIZES.h5,
                }}>
                    Email us your probems and we will respond to you. Pleases be patient we will respond within two to three working days.
                </Text>
            </View>   
        </View>

        {/* displyName */}
        <View>
        
            <View style={{
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.padding,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.white,
                }}>
                <TextInput
                    placeholder="Display name"
                    style={{
                        backgroundColor:COLORS.white,
                        borderRadius:SIZES.radius -5,
                        height:SIZES.largeTitle,
                        marginRight:SIZES.base
                    }}
                />
            </View>
            {/* contact email */}
            <View style={{
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.base,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.white,
            }}>
                <TextInput
                    placeholder="Contact Email"
                    style={{
                        backgroundColor:COLORS.white,
                        borderRadius:SIZES.radius -5,
                        height:SIZES.largeTitle,
                        marginRight:SIZES.padding
                    }}
                />
                
            </View>
            {/* problem info box */}
            <View style={{
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.base,
                borderRadius:SIZES.radius,
                minHeight:200,
                backgroundColor:COLORS.white,

            }}>
                <TextInput 
                    multiline 
                    placeholder="Describe your problem"
                    style={{
                        maxHeight: 100, 
                        padding: 10, 
                        width: "100%",
                    }} 
                />
            </View>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>

  </View>
            {/* submit button */}
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginTop:SIZES.padding -10,
            }}>
                <TextButton
                    label="Send Message"
                    buttonContainerStyle={
                        {paddingVertical: 15, 
                        backgroundColor: COLORS.primary,
                        borderRadius:SIZES.radius,
                        width: SIZES.width-45,
                        height:45
                    }}
                    labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.white}}
                    // onPress={() => navigation.navigate('EditProfile')}
                />        
                
            </View>

        </View>
        {/* Live chat button  */}
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            marginTop:SIZES.padding *2,
        }}>
            <TextButton
                label="Live chat"
                buttonContainerStyle={{
                    paddingVertical: 15, 
                    backgroundColor: COLORS.primary,
                    borderRadius:SIZES.radius,
                    width: SIZES.width-45,
                    
                }}        
                labelStyle={{
                    marginLeft: 5,
                    ...FONTS.body4,
                    color: COLORS.white
                    }}
                appendComponent={
                    <FAIcon name="headset" size={32} />
                }
                // onPress={() => navigation.navigate('EditProfile')}                
            />                 
        </View>
      </ScrollView>
        
    </View>
  );
};


export default ContactUs;
