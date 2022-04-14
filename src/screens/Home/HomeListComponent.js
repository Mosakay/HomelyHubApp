import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { TextButton } from '../../components';

const HomeListComponent = () => { 
  
        {/* add checker if any info filled on form append a diffrent button with a diffrent function */}
  
  return ( 
    
    <View className="Component"> 

      {/* item name */}
      <View>
        <Text>
          Item Name
        </Text>
        {/* text box */}
      </View>

      <View>
        {/* add image */}
        <Text>
          Add Image
        </Text>
        {/* add image item */}
      </View>

      <View>
        {/* item description */}
        <Text>
          Item Description
        </Text>
        {/* text box */}
      </View>
      
      <View>
        {/* item category */} 
        <Text>
          Item Category
        </Text>
        {/* drop down */}
      </View>
      
      
      <View>
        {/* item price */}
        <Text>
          Item Price
        </Text>
        <View>
          {/* icon */}
          {/* text box for numacl values only */}
        </View>
      </View>


      
      <View>
        {/* add item button */}
        <TextButton
           label="Add Item"
          buttonContainerStyle={{
            paddingVertical: SIZES.padding - 5, 
        //   backgroundColor:COLORS.white,
            width: '80%',
            justifyContent:'center',
            alignSelf:'center',                       
          }}
            labelStyle={{
              ...FONTS.body2,
              // paddingVertical: SIZES.padding, 
            }}
            // onPress={() => navigation.Button}
            onPress={() => console.log('yo')}
          />         
      </View>
    
    </View> 
    
  ); 
  
}; 

export default HomeListComponent;