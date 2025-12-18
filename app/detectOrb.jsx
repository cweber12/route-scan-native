import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const DetectOrb = () => {
  return (
    <View>
      <Link href="/matchOrb" style={styles.link}>Match ORB Features</Link>
      <Link href="/" style={styles.link}>Go Home</Link>
    </View>
  )
}

export default DetectOrb

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