import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Banner from './HomeDetail/Banner';
import TopProduct from './HomeDetail/TopProduct';
export default function Home() {
  return (
    <View style = {styles.homeContainer}>
      <Banner/>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer:{
    flex:1
  }
})