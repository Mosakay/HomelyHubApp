import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

const SavedAddress = ({navigation}) => {
  const [address, setAddress] = React.useState([
    {
      id: '0',
      name: 'Mr Boris Account',
      address: '6 Kingsway, Flat No. 15, London, SW150VH',
      checkbox: true,
    },
    {
      id: '1',
      name: 'Mr Biden Account',
      address: '26 Edward St, London, SW75DT',
      checkbox: false,
    },
    {
      id: '2',
      name: 'Mr Putin Account',
      address: 'No. 3, 90 Avenue, London, BB75DE',
      checkbox: false,
    },
  ]);

  return (
    <View style={{flex: 1}}>
      {/* HEADER */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: SIZES.padding * 3,
          backgroundColor: COLORS.white,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray3,
          paddingRight: 80,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: SIZES.padding}}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text
          style={{...FONTS.h3, color: COLORS.black, marginTop: SIZES.padding}}>
          Saved Addresses
        </Text>
      </View>

      {/* FLATLIST  */}
      <View>
        <FlatList
          data={address}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.gray3,
                  maxWidth: SIZES.width / 0.5,
                  minHeight: SIZES.height / 7,
                  marginHorizontal: SIZES.padding + 15,
                  marginTop: SIZES.padding,
                  backgroundColor: COLORS.white,
                }}>
                <View
                  style={{
                    flex: 1,
                    paddingLeft: SIZES.padding * 2,
                    paddingRight: SIZES.base,
                    paddingVertical: SIZES.padding,
                  }}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color: COLORS.black, ...FONTS.body4}}>
                    {item.name}
                  </Text>
                  <Icon name="clear" size={25} color={COLORS.red} />
                  </View>
                  <Text style={{color: COLORS.black, ...FONTS.body5, paddingRight: SIZES.padding * 2}}>
                    {item.address}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* ADD NEW ADDRESS BUTTON */}

      <View>
        <TextButton
          onPress={() => {}}
          label="Add New Address"
          buttonContainerStyle={{
            borderWidth: 1,
            borderColor: COLORS.gray3,
            maxWidth: SIZES.width / 0.5,
            minHeight: SIZES.height / 17,
            marginHorizontal: SIZES.padding + 15,
            marginTop: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
            ...FONTS.body4,
          }}
          appendComponent={
            <Icon
              name="add"
              size={25}
              color={COLORS.black}
              style={{padding: 5}}
            />
          }
        />
      </View>

      {/* FOOTER */}

      <View
        style={{
          borderWidth: 2,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding * 6,
          borderRadius: SIZES.radius,
          borderColor: COLORS.gray2,
        }}></View>

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <TextButton
          label="Continue"
          labelStyle={{...FONTS.body3}}
          buttonContainerStyle={{
            height: 50,
            width: SIZES.width / 2,
            marginTop: SIZES.padding,
            borderRadius: SIZES.base,
            backgroundColor: COLORS.primary,
          }}
        />
      </View>
    </View>
  );
};

export default SavedAddress;
