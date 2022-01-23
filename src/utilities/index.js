
import AsyncStorage from '@react-native-async-storage/async-storage';


const onBoarding = async (isOnboarding) => {
    try {
        await AsyncStorage.setItem('onboarding', isOnboarding)
      } catch (e) {
        console.log(e);
      }
}


const isOnboarded = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('onboarding')
    //   if(value !== null) {
    //     // value previously stored
    //   }
    // } catch(e) {
    //   console.log(e);
    // }
    return await AsyncStorage.getItem('onboarding');
  }