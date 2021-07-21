import React from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import { styles } from './MeetingsCreate.styles'

const CreateUI = ({ title, setTitle }) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.textInput}
        onChangeText={setTitle}
        value={title}
        placeholder='제목을 설정해주세요.'
      />
      <View style={styles.remarksWrapper}>
        <Text style={{color: '#E24E4A', marginRight: 15, fontSize: 12}}>00일 뒤 모집 마감</Text>
        <Text style={{fontSize: 12, color: '#adada3'}}>모집일 2일 전에 자동으로 마감됩니다.</Text>
      </View>
      <View style={{paddingLeft: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
          <Image
            style={{marginRight: 10}}
            source={require('../../../../../public/meetings/time.png')}
          />
          <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Image
            style={{marginRight: 10, marginTop: 3}}
            source={require('../../../../../public/meetings/location.png')} />
          <View>
            <Text style={{marginBottom: 5}}>장소</Text>
            <Text style={{fontSize: 10, color: '#adada3'}}>주소</Text>
          </View>
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}

export default CreateUI