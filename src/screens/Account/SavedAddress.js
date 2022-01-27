import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Checkbox } from 'react-native-paper';

const SavedAddress = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
  
  // Add address

  const addAddress = async item => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newAddress = {id, ...item};
    setAddress([...address, newAddress]);
  };

  //Delete Address


  //Checkbox

  const toggleCheck = (id) => {
    setAddress(
      address.map((item) =>
      item.id === id ? { ...item, checkbox: !item.checkbox } : item
      )
    )
    console.log(id)
  };


  const deleteAddress = id => {
    setAddress(address.filter(item => item.id !== id));
  };

  const [address, setAddress] = React.useState([
    {
      id: '0',
      name: 'Mr Boris Account',
      address: '6 Kingsway, Flat No. 15, London, SW150VH, United Kingdom',
      checkbox: true,
    },
    {
      id: '1',
      name: 'Mr Biden Account',
      address: '1 White House , Washington, SW75DT, United States',
      checkbox: false,
    },
    {
      id: '2',
      name: 'Mr Putin Account',
      address: 'No. 2, Moscow, WW33WW, Russia URSS',
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
        {address.length > 0 ? (
          <FlatList
            data={address}
            keyExtractor={item => item.id}
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
                  <Checkbox status='indeterminate' onPress={() => toggleCheck(item.id)} color={COLORS.transparentPrimary} />
                  <View
                    style={{
                      paddingLeft: SIZES.padding * 2,
                      paddingRight: SIZES.radius,
                      paddingVertical: SIZES.padding,
                      paddingTop: -SIZES.padding,
                      borderLeftWidth: item.checkbox ? 2 : 0,
                      borderLeftColor: item.checkbox ? COLORS.primary : COLORS.gray3
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: COLORS.black, ...FONTS.body4}}>
                        {item.name}
                      </Text>
                      <TouchableOpacity onPress={() => deleteAddress(item.id)}>
                        <Icon name="clear" size={25} color={COLORS.red} />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        color: COLORS.black,
                        ...FONTS.body5,
                        paddingRight: SIZES.padding * 2,
                      }}>
                      {item.address}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <View style={{marginVertical:SIZES.padding}}>
          <Text style={{color:COLORS.red, textAlign:'center'}}>No Addresses to Show... </Text>
          <Text style={{color:COLORS.red, textAlign:'center'}}>Please add your address!</Text>
          </View>
        )}
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
