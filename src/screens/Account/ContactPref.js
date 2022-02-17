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
  const [ticked, setTicked] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const PushNotifactions = () => setIsEnabled(previousState => !previousState);
  const EmailSwitch = () => setIsActive(previousState => !previousState);
  // const TextSwitch = () => setIsEnabled3(previousState => !previousState);



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
          Style={{
            justifyContent:"Center",
            alignItems: "Center",
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

        <View>
          <Text>
            Order status and update notifications
            <Checkbox
            status={ticked ? 'checked' : 'unchecked'}
            onPress={() => {
              setTicked(!ticked);
            }}/>
          </Text>
        </View>
        <View>
          <Text>
            Promotional push notifications
            <Checkbox/>
          </Text>
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
          <View>
            <Text>
              Turn on email notifications
            </Text>
                      <Switch
          trackColor={{ false:  COLORS.gray, true: COLORS.primary }}
          thumbColor={COLORS.white}
          ios_backgroundColor= {COLORS.gray}
          onValueChange={EmailSwitch}
          value={isEnabled}
        />
          </View>

                <View>
          <Text>
            Order status and update notifications
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}/>
          </Text>
        </View>
        <View>
          <Text>
            Promotional push notifications
            <Checkbox/>
          </Text>
        </View>
        <View>
          <Text>
            Application updates & features 
            <Checkbox/>
          </Text>
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
          <Text style={{
            color: COLORS.black,
          }}>
            Turn on text notifactions
            <Switch
          trackColor={{ false:  COLORS.gray, true: COLORS.primary }}
          thumbColor={COLORS.white}
          ios_backgroundColor= {COLORS.gray}
          // onValueChange={TextSwitch}
          value={isEnabled}
        />
          </Text>
        </View>          
        <Text>
            Order status and update notifications
            <Checkbox/>
          </Text>
          <View>
          <Text>
            Promotional push notifications
            <Checkbox/>
          </Text>
          <View>
          <Text>
            Application updates & features 
            <Checkbox/>
          </Text>
        </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactPref;
