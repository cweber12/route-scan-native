import { StyleSheet, View, Button, Dimensions, PanResponder } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import React, { useRef, useState } from 'react'

const { width, height } = Dimensions.get('window');

const INITIAL_BOX = { x: 50, y: 50, w: 200, h: 120 };

const VideoPreview = () => {
  const { uri } = useLocalSearchParams();

  const player = useVideoPlayer(uri ?? "", (p) => {
    if (uri) p.loop = true;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  // Crop box state
  const [box, setBox] = useState(INITIAL_BOX);
  const pan = useRef({ x: 0, y: 0 }).current;
  const resizing = useRef(false);

  // PanResponder for dragging
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, gesture) => {
        pan.x = gesture.x0 - box.x;
        pan.y = gesture.y0 - box.y;
        resizing.current = false;
      },
      onPanResponderMove: (_, gesture) => {
        if (!resizing.current) {
          setBox(b => ({
            ...b,
            x: Math.max(0, Math.min(width - b.w, gesture.moveX - pan.x)),
            y: Math.max(0, Math.min(height - b.h, gesture.moveY - pan.y)),
          }));
        }
      },
    })
  ).current;

  // PanResponder for resizing (bottom-right corner)
  const resizeResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        resizing.current = true;
      },
      onPanResponderMove: (_, gesture) => {
        setBox(b => ({
          ...b,
          w: Math.max(50, Math.min(width - b.x, gesture.moveX - b.x)),
          h: Math.max(50, Math.min(height - b.y, gesture.moveY - b.y)),
        }));
      },
      onPanResponderRelease: () => {
        resizing.current = false;
      }
    })
  ).current;

  return (
    <View style={styles.preview}>
      <VideoView
        style={styles.video}
        player={player}
        nativeControls
        allowsFullscreen
        resizeMode="contain"
      />
      {/* Crop Box Overlay */}
      <View
        style={[
          styles.cropBox,
          { left: box.x, top: box.y, width: box.w, height: box.h }
        ]}
        {...panResponder.panHandlers}
      >
        {/* Resize handle (bottom-right corner) */}
        <View
          style={styles.resizeHandle}
          {...resizeResponder.panHandlers}
        />
      </View>
      <View style={styles.controls}>
        <Button
          style={styles.button}
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => (isPlaying ? player.pause() : player.play())}
        />
        <Button
          style={styles.button}
          title="Save Crop"
          onPress={() => {
            // Save box: { x, y, w, h }
            console.log('Crop box:', box);
          }}
        />
      </View>
    </View>
  )
}

export default VideoPreview

const styles = StyleSheet.create({
  controls: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    gap: 10,
    zIndex: 20,
  }, 

  preview: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: { 
    width: width,
    height: height,
    backgroundColor: "#000",
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cropBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(0,255,0,0.1)',
    zIndex: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resizeHandle: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: -12,
    marginRight: -12,
  },

  button: {
    marginHorizontal: 10,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    color: "#fff",
  },
})