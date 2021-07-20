import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './MeetingsList.styles'

const ListUI = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainView}>
      <Button title='Go to landing' onPress={()=>{navigation.navigate('landing')}} />
    </View>
  )
}

export default ListUI