import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const SavedScans = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        Saved Scans will be displayed here.
      </Text>
    </View>
  )
}

export default SavedScans

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 12,
  },
  
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