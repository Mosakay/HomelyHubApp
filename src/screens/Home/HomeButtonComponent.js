import React from 'react'; 
import {
  View,
  Text,
  Button
} from 'react-native';
import { SIZES,TextButton } from '../../constants';

const HomeButtonComponent = () => { 
  
  return (
    <View>
      {/* shows box  */}
      <View>
        {/* close box at top of box */}
        <TextButton/>
        <View
          style={{
            borderRadius:SIZES.radius,
            borderWidth:2,

          }}
        >
          <View>
            <Text>
              item name
            </Text>
            <TextBox/>
            <Text>
              Add image
            </Text>
            <Image/>
            {/* item name and add image row one */}
          </View>
          <View>
            <Text>
              Item Description
            </Text>
            <TextBox/>
            {/* item discription row two */}
          </View>
          <View>
            <Text>
              Item Category
            </Text>
            <Dropdown/>
            {/* item category row three */}
          </View>
          <View>
            <Text>
              Item Price
            </Text>
            <View>
              <Image/>
              <TextBox/>
            </View>
            
            
            {/* item price */}
          </View>
          <View>
            {/* add item button */}
          </View>

        </View>        
      </View>


    </View> 
    
    
    
  ); 
  
} 

export default HomeButtonComponent;