import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextButton} from '../../components';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Feedback = ({navigation, props}) => {
  const WATER_IMAGE = require('../../assets/icons/star.png');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
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
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              marginTop: SIZES.padding,
            }}>
            Feedback
          </Text>
        </View>
        {/* review expereance */}
        <View>{/* spacer */}</View>
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            // backgroundColor:COLORS.white,
          }}>
          <View>
            <Text
              style={{
                fontSize: SIZES.h2,
                marginTop: SIZES.padding * 2,
                color: COLORS.black,
              }}>
              Rate your Experience
            </Text>
            <Text
              style={{
                fontSize: SIZES.h5,
                color: COLORS.black,
                paddingBottom: SIZES.padding,
              }}>
              Are you satisfied with our service?
            </Text>
            {/* Starts witch light and delight where you click */}

            <View>
              <AirbnbRating
                count={5}
                defaultRating={4}
                size={40}
                showRating={false}
                selectedColor={COLORS.primary}
              />
            </View>
          </View>
          <View>
            <Text></Text>
            <TouchableOpacity>{/* buttons */}</TouchableOpacity>
          </View>
        </View>
        {/* tell us what can be improved */}
        <View
          style={{
            height: 10,
            backgroundColor: COLORS.lightGray1,
          }}>
          {/* spacer */}
        </View>

        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.base,
            backgroundColor: COLORS.white,
          }}>
          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLORS.primary,
              padding: SIZES.base,
            }}>
            Tell us what can be Improved
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                padding: SIZES.base,
              }}>
              <TextButton
                label=" Overall service"
                buttonContainerStyle={{
                  backgroundColor: COLORS.lightGray1,
                  minHeight: SIZES.height / 25,
                  minWidth: SIZES.width / 3,
                  borderRadius: SIZES.radius,
                }}
                labelStyle={{
                  ...FONTS.body5,
                  color: COLORS.darkGray,
                }}
                // onPress={() => navigation.navigate('ContactPref')}
              />
              <TextButton
                label="Pickup and delivery Service"
                buttonContainerStyle={{
                  backgroundColor: COLORS.lightGray1,
                  minHeight: SIZES.height / 25,
                  minWidth: SIZES.width / 3,
                  borderRadius: SIZES.radius,
                }}
                labelStyle={{
                  ...FONTS.body5,
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.base,
                }}
                // onPress={() => navigation.navigate('ContactPref')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                padding: SIZES.base,
                marginBottom: SIZES.padding
              }}>
              <TextButton
                label="Speed and Efficency"
                buttonContainerStyle={{
                  backgroundColor: COLORS.lightGray1,
                  minHeight: SIZES.height / 25,
                  minWidth: SIZES.width / 3,
                  borderRadius: SIZES.radius,
                }}
                labelStyle={{
                  ...FONTS.body5,
                  color: COLORS.darkGray,
                }}
                // onPress={() => navigation.navigate('ContactPref')}
              />
              <TextButton
                label="Customer Support"
                buttonContainerStyle={{
                  backgroundColor: COLORS.lightGray1,
                  minHeight: SIZES.height / 25,
                  minWidth: SIZES.width / 3,
                  borderRadius: SIZES.radius,
                  
                }}
                labelStyle={{
                  ...FONTS.body5,
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.base,
                }}
                // onPress={() => navigation.navigate('ContactPref')}
              />
            </View>
          </View>
          <View
            style={{
              minHeight: 200,
              backgroundColor: COLORS.lightGray1,
              borderRadius: SIZES.radius,
            }}>
            <TextInput
              multiline
              placeholder="Tell us on how we can improve..."
              style={{
                maxHeight: 100,
                padding: 10,
                width: '100%',
              }}
            />
          </View>
        </View>
        {/* continue button */}
       
        <View
          style={{
            marginTop: SIZES.padding,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              margin: SIZES.padding,
            }}>
            <TextButton
              label="Continue"
              buttonContainerStyle={{
                padding: 15,
                width: SIZES.width - 200,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{
                marginLeft: 5,
                ...FONTS.body4,
                color: COLORS.darkGray,
              }}
              // onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Feedback;
