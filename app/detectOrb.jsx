import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const DetectOrb = () => {
  return (
    <View>
      <Text>Detect ORB</Text>
      <Link href="/matchOrb">Match ORB Features</Link>
      <Link href="/">Go Home</Link>
    </View>
  )
}

export default DetectOrb

const styles = StyleSheet.create({})