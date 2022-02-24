import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AuthStack,
  AppStack,
  UserOrVendor,
  UserStack,
  VendorStack,
  OnBoarding,
  Login,
  Register,
  vForgotPassword,
} from './src/screens';
import RegisterContext from './src/context/RegisterContext';
import CheckUser from './src/context/RegisterContext';
import {createStackNavigator} from '@react-navigation/stack';
import store from './src/store';
import {Provider} from 'react-redux';
import {APP_ROUTES} from './src/routes/router';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userStatus, setUserStatus] = React.useState('true');
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  const Stack = createStackNavigator();

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_ROUTES.OnBoarding}>
        <Stack.Screen name={APP_ROUTES.OnBoarding} component={OnBoarding} />

        <Stack.Screen name={APP_ROUTES.UserOrVendor} component={UserOrVendor} />

        <Stack.Group>
          <Stack.Screen name={APP_ROUTES.Login} component={Login} />
          <Stack.Screen name={APP_ROUTES.Register} component={Register} />
          <Stack.Screen
            name={APP_ROUTES.vForgotPassword}
            component={vForgotPassword}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

   

    
    /* <RegisterContext>
      <NavigationContainer>
        {!isFirstLaunch ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </RegisterContext>  */

    
  );
};

export default App;
