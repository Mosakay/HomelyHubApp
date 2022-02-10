import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStack, AppStack, AccountNavigation, SignIn } from './src/screens';
import RegisterContext from './src/context/RegisterContext';
import CheckUser from './src/context/RegisterContext';


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userStatus, setUserStatus] = React.useState('true')
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);


  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);




  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(async() => {
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
    <RegisterContext>
      {isFirstLaunch ? <AuthStack /> : <AccountNavigation />}
    </RegisterContext>
    
  );
};

export default App;
