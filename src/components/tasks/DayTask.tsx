import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from 'components/themed'

const DayTask = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={{alignItems: 'center'}}>
          <ThemedText style={{fontSize: 40, fontWeight: '500'}}>17</ThemedText>
          <ThemedText style={{fontSize: 20}}>木</ThemedText>
        </View>
        <View>
          <ThemedText style={{fontSize: 24, fontWeight: '500'}}>今日</ThemedText>
          <ThemedText>2イベント & 3タスク</ThemedText>
        </View>
      </View>
    </View>
  )
}

export default DayTask