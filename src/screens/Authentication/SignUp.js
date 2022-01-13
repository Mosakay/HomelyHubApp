import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout} from '..';
import {icons, FONTS, SIZES, COLORS} from '../../constants';
import {FormInput, TextButton} from '../../components';
import {utils} from '../../utils';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [surnameError, setSurnameError] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState('');



  return (
    <AuthLayout
      title="Getting Started"
      subtitle="First let's get to know you..."
      titleContainerStyle={{marginTop: SIZES.base - 20}}>
     
      {/* Form Input and Sign Up */}

      <View style={{flex: 1, marginTop: SIZES.padding}}>
        <FormInput
        placeholder="Type your email address here"
          iconName="email"
          iconStyle={{paddingRight: SIZES.base}}
          iconSize={19}
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput label="First Name"
        placeholder="Type your first name here"
        containerStyle={{marginTop: SIZES.radius}}
        onChange={(value) => {setFirstName(value)}}
        errorMsg={firstNameError}
        appendComponent={
          <View
          style={{justifyContent:'center'}}
          >
            <Image
            source={firstname == "" || (firstname != "" && firstNameError == "") ? icons.correct : icons.cancel}
            style={{
              height: 20,
              width: 20,
              tintColor: firstname == "" ? COLORS.gray : (firstname != "" && firstNameError == "") ? COLORS.green : COLORS.red
            }}
            />
          </View>
        }
        />

        <FormInput label="Surname"
        placeholder="Type your surname here"
        containerStyle={{marginTop: SIZES.radius}}
        onChange={(value) => {setSurname(value)}}
        errorMsg={surnameError}
        appendComponent={
          <View
          style={{justifyContent:'center'}}
          >
            <Image
            source={surname == "" || (surname != "" && surnameError == "") ? icons.correct : icons.cancel}
            style={{
              height: 20,
              width: 20,
              tintColor: surname == "" ? COLORS.gray : (surname != "" && surnameError == "") ? COLORS.green : COLORS.red
            }}
            />
          </View>
        }
        />
        

        <FormInput label="Phone Number"
        iconName="smartphone"
        iconStyle={{paddingRight: SIZES.base}}
        iconSize={19}
        placeholder="Type your phone number here"
        containerStyle={{marginTop: SIZES.radius}}
        onChange={(value) => {setPhoneNumber(value)}}
        errorMsg={phoneNumberError}
        keyboardType="numeric"
        appendComponent={
          <View
          style={{justifyContent:'center'}}
          >
            <Image
            source={phoneNumber == "" || (phoneNumber != "" && phoneNumberError == "") ? icons.correct : icons.cancel}
            style={{
              height: 20,
              width: 20,
              tintColor: phoneNumber == "" ? COLORS.gray : (phoneNumber != "" && phoneNumberError == "") ? COLORS.green : COLORS.red
            }}
            />
          </View>
        }
        />

            {/* Footer */}

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TextButton
            label="Next"
            // disabled={isEnableSignUp() ? false : true}
            buttonContainerStyle={{
              height: 50,
              width: SIZES.width / 2,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius + 5,
              backgroundColor: COLORS.green2
            }}
            onPress={() => navigation.navigate("SignUp2")}
          />
        </View>

        <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.radius,
          justifyContent: 'center'
        }}
        >
          <Text
          style={{
            color: COLORS.darkGray,
            ...FONTS.body3
          }}
          >
            Already registered?
          </Text>

          <TextButton
          label="Sign In"
          buttonContainerStyle={{
            backgroundColor: null,
            marginLeft: 3,
          }}
          labelStyle={{
            ...FONTS.body3,
            color: COLORS.green2,
            fontWeight: 'bold',
          }}
          onPress={() => navigation.navigate("SignIn")}
          />
        </View>

      </View>


            




    </AuthLayout>
  );
};

export default SignUp;
