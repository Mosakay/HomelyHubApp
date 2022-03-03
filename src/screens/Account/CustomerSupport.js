import {View, Text, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Checkbox, Searchbar} from 'react-native-paper';
import { Accordion } from '@dooboo-ui/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomerSupport = ({navigation}) => {  

  const [search, setSearch] = React.useState("");

  const updateSearch = query => setSearch(query);
  useNativeDriver: true;
  //keeps erroring out saying this (useNativeDriver has to be true or false) is required but not crashing or breaking 
  //the app
  
  state = {
    contents: [
      {
        title: 'About Homely Hub',
        body: 'Hi. I love this component. What do you think?',
      },
      {
        title: 'Useing homely hub',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'What Time is Homely Hub Available',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Account and payment options',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'Fees on Homely Hub',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  return (
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
          Customer Service
        </Text>
      </View>

      {/* search box */}

      <View
      style={{
        justifyContent:'center',
        backgroundColor: COLORS.white,
        alignItems:'center',
        width:SIZES.width - 150,
        padding:SIZES.padding -1,
        alignSelf:'center',
        marginTop: 50,
        borderRadius:10,


      }}
      >
        <Text
        style={{
          paddingBottom: 20,
          color:COLORS.black,
        }}>
          Need some help?
        </Text>
        <Searchbar
        placeholder="Search something"
        onChangeText={updateSearch}
        value={search}
        fontSize={12}
        clearIcon={null}
        cancelIcon={null}
        />

      </View>

      {/* buttons for diffrent sections */}
      <View>
      <TextButton
          label="Getting started"
          buttonContainerStyle={{paddingVertical: 15, backgroundColor: null}}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons
              style={{paddingLeft: SIZES.padding * 8}}
              name="chevron-forward-outline"
              size={22}
            />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          // onPress={() => navigation.navigate('EditProfile')}
        />
        <TextButton
          label="Contact us"
          buttonContainerStyle={{paddingVertical: 15, backgroundColor: null}}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons
              style={{paddingLeft: SIZES.padding * 8}}
              name="chevron-forward-outline"
              size={22}
            />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          // onPress={() => navigation.navigate('EditProfile')}
        />
        <TextButton
          label="Feedback"
          buttonContainerStyle={{paddingVertical: 15, backgroundColor: null}}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons
              style={{paddingLeft: SIZES.padding * 8}}
              name="chevron-forward-outline"
              size={22}
            />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          // onPress={() => navigation.navigate('EditProfile')}
        />
        <TextButton
          label="Legal"
          buttonContainerStyle={{paddingVertical: 15, backgroundColor: null}}
          appendComponent={<Ionicons name="person-outline" size={22} />}
          prependComponent={
            <Ionicons
              style={{paddingLeft: SIZES.padding * 8}}
              name="chevron-forward-outline"
              size={22}
            />
          }
          labelStyle={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
          // onPress={() => navigation.navigate('EditProfile')}
        />
      </View>

      {/* faq  drop downs */}
      <View
      style={{
        justifyContent:'center',
        alignItems:'center',
      }}
      >
        <Text
        style={{
          color:COLORS.primary,
          padding:SIZES.padding
        }}
        > Frequently Asked Questions </Text>

        {/* dropdown card */}
        <View>
  <ScrollView style={{ alignSelf: 'stretch' }}>
    {
      this.state.contents
        ? this.state.contents.map((param, i) => {
          useNativeDriver: true
          return (
            <Accordion
            useNativeDriver={true}
              key={i}
              contentVisible={false}
              style={{marginLeft: 5, ...FONTS.body4, color: COLORS.darkGray}}
              visibleElement={
                <FAIcon 
                  name="arrow-up" 
                  style={{paddingLeft: SIZES.padding * 8}}
                  size={22}
                />
              }
              invisibleElement={
                <FAIcon 
                  name="arrow-down"
                  style={{paddingLeft: SIZES.padding * 8}}
                  size={22}
                />
              }
              header={
                <View>
                  <Text style={{
                    fontSize: 16,
                    color: 'blue',
                  }}>{param.title}</Text>
                </View>
              }
            >
              <Text style={[
                {
                  fontSize: 20,
                }
              ]}>
                {param.body}
              </Text>
            </Accordion>
          );
        })
        : null
    }
    <View style={{ height: 96 }}/>
  </ScrollView>
</View>
            

      </View>
      
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;