import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Link href="/detectPose">Start New Scan</Link>
      <Link href="/savedScans">Saved Scans</Link>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})