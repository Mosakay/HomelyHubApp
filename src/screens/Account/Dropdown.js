import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Title } from 'react-native-paper';
import { COLORS, SIZES } from '../../constants';

var label = String;


const Dropdown = ({ label, Title,Title2,Title3,body,body2,body3,list,list2,list3,list4,list5,list6,list7 }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    
    if (visible) {
      return (
        <View style={{
          backgroundColor: '#fff',
          width:SIZES.width-60,
          borderRadius:SIZES.radius,
          marginBottom: 20,
        }}>
            <Text>
              {Title}
            </Text>
            <Text>
              {body}
            </Text>
            <Text>
              {Title2}
            </Text>
            <Text>
              {body2}
            </Text>
            <Text>
              {list}
            </Text>
            <Text>
              {list2}
            </Text>
            <Text>
              {list3}
            </Text>
            <Text>
              {list4}
            </Text>
            <Text>
              {Title3}
            </Text>
          <Text>
              {body3}
          </Text>
          <Text>
              {list5}
          </Text>
          <Text>
              {list6}
          </Text>
          <Text>
              {list7}
          </Text>
          <Text
          style={{
            height: 50,
            marginBottom:-50,
            /* margin: 20px 0 -50px 0; use this if you want #container to have a 'bottom padding', in this case of 20px */
          }}
          >
          </Text>
        </View>
          
      );
    }
  };

  
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          height: 50,
          width: SIZES.width -60,
          paddingHorizontal: 10,
          marginBottom:10,
          borderRadius:SIZES.radius,
          zIndex: 1,
        }}
        onPress={toggleDropdown}
      >
        <Text style={{
          flex: 1,
          textAlign: 'center',
        }}>{label}</Text>
        {/* {Icon()} */}
      </TouchableOpacity>
      <View>
        {renderDropdown()}
      </View>
    </View>
    
    
  );
}


export default Dropdown;