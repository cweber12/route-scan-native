import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const RootLayout = () => {
  return (
    <>
        <StatusBar style="auto" />
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="detectPose" options={{ title: 'Detect Pose' }} />
            <Stack.Screen name="detectOrb" options={{ title: 'Detect ORB' }} />
            <Stack.Screen name="matchOrb" options={{ title: 'Match ORB Features' }} />
            <Stack.Screen name="savedScans" options={{ title: 'Saved Scans' }} />
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})