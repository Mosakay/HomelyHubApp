import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {
  OnBoarding,
  SignIn,
  SignUp,
  SignUp2,
  ForgotPassword,
  Otp,
  MainLayout,
} from './src/screens';
import {AuthContext, AuthProvider} from './src/context/AuthContext';
import {isOnboarded} from './src/utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

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
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={onboarded === true ? 'SignIn' : 'OnBoarding'}>
          <Stack.Screen name="MainLayout" component={MainLayout} />

          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="SignUp2" component={SignUp2} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
