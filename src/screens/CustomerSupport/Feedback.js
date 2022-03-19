import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextButton} from '../../components';

const Feedback = ({navigation, props}) => {

  return (
    <View
      style={{
        flex: 1
      }}
    >
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
                Feedback
                </Text>
            </View>
            {/* review expereance */}
            <View
              style={{
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.base,
                backgroundColor:COLORS.white,
              }}
            >
              <View>
                <Text>
                  Rate your Experience
                </Text>
                <Text>Are you satisfied with our customer service?</Text>
                {/* Starts witch light and delight where you click */}
                <View>

                </View>                
              </View>
              <View>
                <Text>

                </Text>
                  <TouchableOpacity>
                    {/* buttons */}
                  </TouchableOpacity>
              </View>
            </View>
            {/* tell us what can be improved */}

            <View
              style={{
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.base,
                backgroundColor:COLORS.white,
              }}             
            >  
            <Text>
                Tell us what can be improved
              </Text>
              <View style={{
                  minHeight:200,

              }}>
                  <TextInput 
                      multiline 
                      placeholder="Tell us on how we can improve..."
                      style={{
                          maxHeight: 100, 
                          padding: 10, 
                          width: "100%",
                      }} 
                  />
              </View>
            </View>
            {/* continue button */}
            <View>
            <TextButton
              label="Continue"
              buttonContainerStyle={{
                padding: 15,
                width: SIZES.width - 200,
                borderRadius:SIZES.radius,
              }}
              labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
              // onPress={() => navigation.navigate('EditProfile')}
            />
            </View>
        </ScrollView>
    </View>
  );
};


export default Feedback;
