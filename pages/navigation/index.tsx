import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from '../screens'
import ListPage from '../screens/meetings'

const NavigationPage = () => {
  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="landing" component={LandingPage}/>
        <Stack.Screen name="list" component={ListPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationPage