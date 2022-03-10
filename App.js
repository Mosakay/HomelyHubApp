import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import UserStack from './src/routes/UserStack';
import VendorStack from './src/routes/VendorStack';
import {createStackNavigator} from '@react-navigation/stack';
import UserOrVendor from './src/screens/Authentication/UserOrVendor';
import {APP_ROUTES} from './src/routes/router';
import {useSelector, Provider} from 'react-redux';
import store from './src/store/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  const isLoading = useSelector(state => state.homelyHub.isLoading);
  const authUser = useSelector(state => state.homelyHub.authUser);

  console.log(authUser);
  console.log(isLoading);

  if (isLoading) {
    return <Splash />;
  }
  BoardingCheck();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={
          isFirstLaunch ? APP_ROUTES.OnBoarding : APP_ROUTES.UserOrVendor
        }>
        <Stack.Screen name={APP_ROUTES.OnBoarding} component={OnBoarding} />

        <Stack.Screen name={APP_ROUTES.UserOrVendor} component={UserOrVendor} />
        <Stack.Screen name={APP_ROUTES.VendorStack} component={VendorStack} />
        <Stack.Screen name={APP_ROUTES.UserStack} component={UserStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Splash(props) {
  React.useEffect(() => {
    return () => {
      SplashScreen.hide();
    };
  }, []);

  return null;

  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <ActivityIndicator size="large" />
  //   </View>
  // );
}

function App(params) {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
async function BoardingCheck() {
  try {
    const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
    if (alreadyLaunched == null || alreadyLaunched == 'false') {
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  } catch (error) {
    console.log(error);
  }
}
export default App;
