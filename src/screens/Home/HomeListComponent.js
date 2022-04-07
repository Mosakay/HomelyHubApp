import React from 'react';
import {
  View,
  Text
} from 'react-native';

const HomeListComponent = (props) => { 
  
  return ( 
    
    <View className="Component"> 
    
      <Text
        style={{
          
        }}
      >{props.text}</Text> 
    
    </View> 
    
  ); 
  
}; 

export default HomeListComponent;