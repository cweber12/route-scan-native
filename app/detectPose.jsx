import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const DetectPose = () => {
  return (
    <View>
      <Text>Detect Pose</Text>
      <Link href="/detectOrb">Detect ORB</Link>
      <Link href="/">Go Home</Link>
    </View>
  )
}

export default DetectPose

const styles = StyleSheet.create({})