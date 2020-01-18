import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

function Profile( { navigation } ){
  const githubUsername = navigation.getParam('github_username')

  return(
    <WebView showsHorizontalScrollIndicator={false} source={{ uri: `https://github.com/${githubUsername}`}} style={{flex: 1}}/>
  )
}

export default Profile