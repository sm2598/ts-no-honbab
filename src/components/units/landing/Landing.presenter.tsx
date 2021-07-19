import React from 'react'
import { View, Image, Button, TouchableOpacity } from 'react-native'
import { styles } from './Landing.styles'

const LandingUI = ({navigation}) => {
  
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require('../../../../public/landing/logo.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('list')}
      >
        <Image
          source={require('../../../../public/landing/login-button.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default LandingUI
