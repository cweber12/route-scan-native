import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const MatchOrb = () => {
  return (
    <View>
      <Link href="/" style={styles.link}>Go Home</Link>
    </View>
  )
}

export default MatchOrb

const styles = StyleSheet.create({
    link: {
    fontSize: 18,
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    textAlign: 'center',
  },
})