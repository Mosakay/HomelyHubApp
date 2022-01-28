import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import FormInput from '../../components/FormInput';
import TextButton from '../../components/TextButton';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {Switch} from 'react-native-paper';

const AddAddress = ({onAdd}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [checkbox, setCheckBox] = useState('false');

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert('Please add a Address!');
      return;
    }

    onAdd({name, text, checkbox});

    setName('');
    setText('');
    setCheckBox(false);
  };

  return (
    <View style={{}}>

      <TextInput 
      style={styles.input} 
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
      />
      


      <TextInput 
      style={styles.input} 
      placeholder="Enter your address"
      value={text}
      onChangeText={setText}
      />


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: SIZES.base
        }}>
        <Text
          style={{
            ...FONTS.body4,
          }}>
          Current Address?
        </Text>

        <Switch
          value={checkbox}
          onValueChange={setCheckBox}
          color={COLORS.orange}
        />
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <TextButton
          onPress={onSubmit}
          label="Save Address"
          buttonContainerStyle={{
            borderWidth: 1,
            borderColor: COLORS.gray3,
            width: 150,
            minHeight: SIZES.height / 18,
            marginTop: SIZES.radius,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius
          }}
          labelStyle={{
            color: COLORS.black,
            ...FONTS.body4,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 10,
  },
});

export default AddAddress;
