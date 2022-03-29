import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import TrackPlayer from 'react-native-track-player';

const GOOGLE = 'https://www.google.com'
const YOUTUBE = 'https://www.youtube.com/watch?v=yiZZeK-y6cI&ab_channel=CodePalace'
const iframeString = '<iframe src="https://mixlr.com/users/9268623/embed" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="180px" frameborder="no" ></iframe><small><a href="https://mixlr.com/runner-radio" style="color:#ffffff;text-align:left; font-family:Barlow, sans-serif; font-size:11px;"></a></small>'

export default function App() {

  const tracks = [
    {
      id: 1,
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Blue',
    },
    {
      id: 2,
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      title: 'Red',
    },
  ];

  TrackPlayer.updateOptions({
    stopWithApp: false, 
    capabilities: [TrackPlayer.CAPABILITY_PLAY, 
      TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, 
        TrackPlayer.CAPABILITY_PAUSE],
  });

  const App = () => {
    const setUpTrackPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(tracks);
      } catch(e) {
        console.log(e);
      }
    }

    useEffect(() => {
      setUpTrackPlayer();

      return () => TrackPlayer.destroy(); 
    }, []);
    return(
    <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() =>
            TrackPlayer.pause()}>
          <Text style={styles.text} >Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() =>
            TrackPlayer.play()}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() =>
            TrackPlayer.skipToPrevious()}>
          <Text style={styles.text}>Previcous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() =>
            TrackPlayer.skipToNext()}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };


  // return (
  //   <View style={styles.container}>
  //   <WebView
  //         scalesPageToFit={true}
  //         bounces={false}
  //         javaScriptEnabled
  //         style={{ height: 180, width: 300 }}
  //         source={{
  //           html: `
  //                 <!DOCTYPE html>
  //                 <html>
  //                   <head></head> // <--add header styles if needed
  //                   <body>
  //                     <div id="baseDiv">${iframeString}</div> 
  //                   </body>
  //                 </html>
  //           `,
  //         }}
  //         automaticallyAdjustContentInsets={false}
  //     />
      
  //     </View>
      
  // );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    margin: 10, 
    width: 160,
  }, 
  text: {
    fontSize: 30, 
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30, 
  },
});
