import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen'



const Stack = createStackNavigator();


const CreateHomeStack = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}   options={{ headerShown:false }} />
      </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <CreateHomeStack />
     </NavigationContainer>
  );
};



export default Navigation;
