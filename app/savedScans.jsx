import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const SavedScans = () => {
  return (
    <View>
      <Text>Saved Scans</Text>
      <Link href="/">Go Home</Link>
    </View>
  )
}

export default SavedScans

const styles = StyleSheet.create({})