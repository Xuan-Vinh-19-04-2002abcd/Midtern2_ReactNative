import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigator from './Navigator/TabNavigator'
export default function App() {
  return (
    <View style ={styles.container}>
      <TabNavigator></TabNavigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    
  }
})