import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'
import * as ImagePicker from "expo-image-picker";
import React from 'react'

const Home = () => {
  const router = useRouter();

  const pickVideo = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert("Permission needed", "Allow access to pick a video.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      // Navigate to videoPreview and pass the URI as a param
      router.push({ pathname: '/videoPreview', params: { uri: result.assets[0].uri } });
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/detectPose" style={styles.link}>Detect Pose</Link>
      <Link href="/savedScans" style={styles.link}>Saved Scans</Link>
      <Button title="Upload Video" onPress={pickVideo} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

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

  preview: { 
    marginTop: 16, 
    alignItems: "center", 
    gap: 12 
  },
  
  video: { 
    width: 360, 
    height: 220 
  },
})