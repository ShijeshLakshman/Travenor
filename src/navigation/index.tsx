import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
// import {useSelector} from 'react-redux';
import { RootStackParamList } from '../utils/types';

import BottomTabNavigation from './bottomTabNavigation';
import OnboardingScreen from '@screens/OnboardingScreen';
import LoginScreen from '@screens/LoginScreen';

const Navigation = () => {
  //   const { userToken } = useSelector((state: any) => state?.auth);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'ios_from_left',
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
