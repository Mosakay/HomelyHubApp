import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import UserOrVendor from './src/screens/Authentication/UserOrVendor';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store';
import { APP_ROUTES } from './src/routes/router';
import Login from './src/screens/Vendor/Login';
import Register from './src/screens/Vendor/Register';
import vForgotPassword from './src/screens/Vendor/vForgotPassword';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userStatus, setUserStatus] = React.useState('true');
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  
  async function isOnboarded() {
    try {
      await AsyncStorage.setItem('alreadyLaunched', false);

      const isLauched = await AsyncStorage.getItem('alreadyLaunched');

      console.log(`Is  Lauched` + isLauched);

      if (!isLauched) {
        await AsyncStorage.setItem('alreadyLaunched', true);
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    isOnboarded();
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={APP_ROUTES.Onboarding}>
          <Stack.Screen name={APP_ROUTES.Onboarding} component={OnBoarding} />

          <Stack.Screen
            name={APP_ROUTES.UserOrVendor}
            component={UserOrVendor}
          />

          <Stack.Group>
            <Stack.Screen
              name={APP_ROUTES.VendorLogin}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={APP_ROUTES.VendorRegister}
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={APP_ROUTES.VendorForgotPassword}
              component={vForgotPassword}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>

      {/* {isFirstLaunch ? <AuthStack /> : <AppStack />} */}
    </Provider>
    // <RegisterContext>
    //   <NavigationContainer>
    //     {isFirstLaunch ? <AuthStack /> : <AppStack />}
    //   </NavigationContainer>
    // </RegisterContext>
  );
};

export default App;

const VendorStack = {};
