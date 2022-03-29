import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const GOOGLE = 'https://www.google.com'
const YOUTUBE = 'https://www.youtube.com/watch?v=yiZZeK-y6cI&ab_channel=CodePalace'
const iframeString = '<iframe src="https://mixlr.com/users/9268623/embed" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="180px" frameborder="no" ></iframe><small><a href="https://mixlr.com/runner-radio" style="color:#ffffff;text-align:left; font-family:Barlow, sans-serif; font-size:11px;"></a></small>'

export default function App() {
 

  return (
    <View style={styles.container}>
    <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 180, width: 300 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <div id="baseDiv">${iframeString}</div> 
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
      />
      
      </View>
      
  );
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
