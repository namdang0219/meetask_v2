import { View, Text } from 'react-native'
import React from 'react'
import { ViewInsetTop } from 'components/view'
import { Header } from 'components/header'


const AnalyticScreen = () => {
  return (
    <ViewInsetTop>
      <Header type='onlyTitle' title='Analytic'></Header>
    </ViewInsetTop>
  )
}

export default AnalyticScreen