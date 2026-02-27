import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import { Colors } from '../styles/colors';
import TechnologiesScreen from '../screens/TechnologiesScreen';


export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Technologies: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        id="Root"
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.surface,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          
        }}
      >
        <Stack.Screen 
        name="Technologies" 
        component={TechnologiesScreen}
        options={{ title: 'Tecnologías' }}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Mi App' }}
        />
        
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          options={{ title: 'Acerca De' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}