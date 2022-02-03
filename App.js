import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack, AppStack } from './src/screens';
import RegisterContext from './src/context/RegisterContext';
import CheckUser from './src/context/RegisterContext';


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [onboarded, setOnboarded] = React.useState(false);
  const [userStatus, setUserStatus] = React.useState('true')

  const checkOnboarding = async () => {
    try {
      let value = await AsyncStorage.getItem('onboarded');
      return value
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkOnboarding();
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      setOnboarded(await checkOnboarding())
    }, 1000);
  }, []);


  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const CheckOnboarded = () => {
    if (onboarded === 'true') {
      return (
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      )
    } else {
      return (
        <NavigationContainer>
          <AuthStack /> 
        </NavigationContainer>
      )
    }
  }

  return (
    <RegisterContext>
      <CheckOnboarded /> 
    </RegisterContext>
    
  );
};

export default App;
