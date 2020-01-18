import React, {useEffect, useState} from 'react'
import { 
  StyleSheet, 
  Image, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Keyboard,
  Dimensions} from 'react-native'

import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'
import { connect, disconnect, subscribeToNewDevs } from '../services/socket'

function Main({ navigation }){
  const [devs, setDevs] = useState([])
  const [currentRegion, setCurrentRegion] = useState(null)
  const [techs, setTechs] = useState('')
  const [keyboardHeight, setKeyboardHeight] = useState(20)

  Keyboard.addListener('keyboardDidShow', (e) => {
     function loadKeyboardPosition(){
       setKeyboardHeight(e.endCoordinates.height + 40)
    }
    loadKeyboardPosition()
  })

  Keyboard.addListener('keyboardDidHide', (e) => {
     function loadKeyboardPosition(){
       setKeyboardHeight(20)
    }
    loadKeyboardPosition()
  })

  useEffect(() =>{
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync()
      
      if (granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }

    }
    loadInitialPosition()
  }, [])

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]))
  }, [devs])

  function setupWebSocket(){
    disconnect()

    const { latitude, longitude } = currentRegion
    connect(
      latitude,
      longitude,
      techs
    )
  }

  async function loadDevs(){
    const { latitude, longitude } = currentRegion

    const response = await api.get('./search', {
      params: {
        latitude,
        longitude,
        techs
      }    
    })

    setDevs(response.data.devs)
    setupWebSocket()
  }

  function handleRegionChanged(region){
    setCurrentRegion(region)
  }

  if (!currentRegion){
    return null
  }

  return(
    <>
      <View style={styles.container}>
          <MapView 
            onRegionChangeComplete={handleRegionChanged} 
            initialRegion={currentRegion} 
            style={styles.map}
          >
            {devs.map(dev => (
              <Marker key={dev._id}
                coordinate={{
                  latitude: dev.location.coordinates[1], 
                  longitude: dev.location.coordinates[0]
              }}>
                <Image 
                  style={styles.avatar} 
                  source={{ uri: dev.avatar_url }}/>
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: dev.github_username })
                }}>
                  <View style={styles.callout}>
                    <Text style={styles.devName}>{dev.name}</Text>
                    <Text style={styles.devBio}>{dev.bio}</Text>
                    <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView> 
      </View>   
      <View style={[styles.searchForm, {bottom: keyboardHeight}]}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <TouchableOpacity onPress={loadDevs}  style={styles.loadButton}>
          <MaterialIcons 
            name='my-location' 
            size={20} 
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },

  searchForm: {
    position: "absolute",
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput:{
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 3,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#8e4dff",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
})

export default Main
