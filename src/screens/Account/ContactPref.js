import {View, Text, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Checkbox} from 'react-native-paper';

const ContactPref = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const PushNotifactions = () => setIsEnabled(previousState => !previousState);
  const EmailSwitch = () => setIsActive(previousState => !previousState);
  const TextSwitch = () => setIsEnabled2(previousState => !previousState);
  
  const TextSwitchCon = () => setIsEnabled2(previousState => !previousState);
  const TextSwitchCon2 = () => setIsEnabled2(previousState => !previousState);
  const TextSwitchCon3 = () => setIsEnabled2(previousState => !previousState);
  
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
          Contact Preferences
        </Text>
      </View>

      {/* INPUTS */}
      <View style={{marginHorizontal: SIZES.padding}}>
      {/* Main notifactions */}
      <View>
        <Text
        style={{...FONTS.h3, color: COLORS.primary, marginTop: SIZES.padding}}>
            Push Notifactions
          </Text>
          <Text>
            Control and allow how notifactions apper outside of the applcation
          </Text>
          {/* need a switch to alow this next section if enable alow modafcation of check box's else disable them */}
          <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: SIZES.radius
          }}>
          <Text
          style={{
            color: COLORS.black,
          }}>
            Turn on push notifications</Text>
            <Switch
            trackColor={{ false:  COLORS.gray, true: COLORS.primary }}
            thumbColor={COLORS.white}
            ios_backgroundColor= {COLORS.gray}
            onValueChange={PushNotifactions}
            value={isEnabled}
          />
          </View>

        <View          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: SIZES.radius
          }}>
          <Text>
            Order status and update notifications
          </Text>
          <Checkbox
              status={checked8 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked8(!checked8);
              }}
              disabled={TextSwitchCon ? !isEnabled : isEnabled}
            />        
            </View>
        <View
        style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop: SIZES.radius
        }}
        >
          <Text>
            Promotional push notifications
          </Text>
          <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
              }}
              disabled={TextSwitchCon ? !isEnabled : isEnabled}
            />
        </View>
      </View>

        {/* email notafactions */}
        <View>
          <Text
          style={{...FONTS.h3, color: COLORS.primary, marginTop: SIZES.padding}}>
          Email Notifications
          </Text>
          <Text>
            Control and allow how you are contacted via email.
          </Text>
          <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: SIZES.radius
          }}
          >
            <View Style={{
              flex:1,
            }}>
            <Text
            style={{
              color: COLORS.black,
            }}
            >
              Turn on email notifications
            </Text>
            </View>
            <View>
            <Switch
          trackColor={{ false:  COLORS.gray, true: COLORS.primary }}
          thumbColor={COLORS.white}
          ios_backgroundColor= {COLORS.gray}
          onValueChange={EmailSwitch}
          value={isActive}
        />
            </View>

          </View>

                <View
                style={{
                  flex:1,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  marginTop: SIZES.radius
                }}
                >
          <Text>
            Order status and update notifications
            
          </Text>
          <Checkbox  
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3(!checked3);
              }}
              disabled={TextSwitchCon2 ? !isActive : isActive}    
            />
        </View>
        <View
        style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop: SIZES.radius
        }}
        >
          <Text>
            Promotional push notifications
            
          </Text>
          <Checkbox
              status={checked4 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked4(!checked4);
              }}
              disabled={TextSwitchCon2 ? !isActive : isActive}
            />
        </View>
        <View
        style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop: SIZES.radius
        }}>
          <Text>
            Application updates & features 
            
          </Text>
          <Checkbox
              status={checked5 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5(!checked5);
              }}
              disabled={TextSwitchCon2 ? !isActive : isActive}
            />
        </View>
        </View>

        {/* text notafactions */}
        <View>
          <Text
          style={{...FONTS.h3, color: COLORS.primary, marginTop: SIZES.padding}}>
            Text Notifications
          </Text>
          <Text>
            Control and allow how you are contacted via text message.
          </Text>
          <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: SIZES.radius
          }}>
          <Text style={{
            color: COLORS.black,
          }}>
            Turn on text notifactions
            
          </Text>
          <Switch
          trackColor={{ false:  COLORS.gray, true: COLORS.primary }}
          thumbColor={COLORS.white}
          ios_backgroundColor= {COLORS.gray}
          onValueChange={TextSwitch}
          value={isEnabled2}
        />
          </View>
        </View> 
        <View
        style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop: SIZES.radius
        }}>         
        <Text>
            Order status and update notifications
            
          </Text>
          <Checkbox
              status={checked6 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked6(!checked6);
              }}
              disabled={TextSwitchCon3 ? !isEnabled2 : isEnabled2}
            />
          </View>
          <View>
            <View
            style={{
              flex:1,
              flexDirection:'row',
              justifyContent:'space-between',
              marginTop: SIZES.radius
            }}
            >
          <Text>
            Promotional push notifications
            
          </Text>
          <Checkbox            
              status={checked7 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked7(!checked7);
              }}
              disabled={TextSwitchCon3 ? !isEnabled2 : isEnabled2}
            />
          </View>
          <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: SIZES.radius
          }}
          >
          <Text>
            Application updates & features 
          </Text>
          <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              disabled={TextSwitchCon3 ? !isEnabled2 : isEnabled2}
              // color={COLORS.lightGray2}
            />
        </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactPref;
