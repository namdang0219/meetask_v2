import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calendar from 'screens/app/Calendar'
import Menu from 'screens/app/Menu'

const Stack = createNativeStackNavigator()

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Menu' component={Menu}/>
    </Stack.Navigator>
  )
}

export default MenuStack