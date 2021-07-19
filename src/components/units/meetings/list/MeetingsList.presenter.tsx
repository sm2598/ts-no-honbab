import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './MeetingsList.styles'


const ListUI = ({navigation}) => {

  return (
    <View style={styles.mainView}>
      <Button title='Go to landing' onPress={()=>{navigation.navigate('landing')}} />
    </View>
  )
}

export default ListUI