import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calendar from 'screens/app/Calendar'
import HomeDrawer from '../drawers/HomeDrawer'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeDrawer' component={HomeDrawer}/>
    </Stack.Navigator>
  )
}

export default HomeStack