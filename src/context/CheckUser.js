import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const CheckUser = () => {

     const [userStatus, setUserStatus] = React.useState(false)

      return (
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      )

}

export default CheckUser