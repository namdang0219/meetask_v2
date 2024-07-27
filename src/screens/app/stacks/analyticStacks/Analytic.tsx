import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'components/buttons'
import { useNavigation } from '@react-navigation/native'

const Analytic = () => {
  const {navigate} = useNavigation<any>()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button style={{paddingHorizontal: 50}} onPress={() => navigate('FocusStack', {screen: 'ClockOne'})}>Open Focus Mode</Button>
    </View>
  )
}

export default Analytic