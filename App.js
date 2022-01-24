import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack, AppStack } from './src/screens';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [onboarded, setOnboarded] = React.useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@onBoarding');
      if (value !== null) {
        setOnboarded(true);
      }
    } catch (err) {
    } finally {
    }
  };
  React.useEffect(() => {
    checkOnboarding();
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('asda');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('asda');
      setIsLoading(false);
    },
  }));

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    
      <NavigationContainer>
        {/* <AppStack /> */}
        <AuthStack />
      </NavigationContainer>
    
  );
};

export default App;
