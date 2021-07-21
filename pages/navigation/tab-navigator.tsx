import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListPage from '../screens/meetings'
import MapPage from '../screens/map';
import MypagePage from '../screens/mypage';
import ChattingPage from '../screens/chatting';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
          // let iconName;// = '../../public/navigation/meetings-on.png'

          // console.log(route.name)
          // console.log('aa', focused)
          
          // if (route.name === 'meetings') return <Image source={require(focused ? '../../public/navigation/meetings-on.png' : '../../public/navigation/meetings-off.png')}/>
          // if (route.name === 'map') return <Image source={require('../../public/navigation/map-on.png')}/>
          // if (route.name === 'chatting') return <Image source={require('../../public/navigation/chatting-on.png')}/>
          // if (route.name === 'mypage') return <Image source={require('../../public/navigation/mypage-on.png')}/>
            // iconName = focused
            //   ? '../../public/navigation/meetings-on.png'
            //   : '../../public/navigation/meetings-off.png'
          // }

          // return <Image source={require(iconName)} />;

          // if (route.name === 'meetings') {
          //   iconName = focused
          //     ? <Image source={require('../../public/navigation/meetings-on.png')} />
          //     : <Image source={require('../../public/navigation/meetings-off.png')} />
          // } else if (route.name === 'map') {
          //   iconName = focused
          //     ? <Image source={require('../../public/navigation/map-on.png')} />
          //     : <Image source={require('../../public/navigation/map-off.png')} />
          // } else if (route.name === 'chatting') {
          //   iconName = focused
          //     ? <Image source={require('../../public/navigation/chatting-on.png')} />
          //     : <Image source={require('../../public/navigation/chatting-off.png')} />
          // } else if (route.name === 'mypage') {
          //   iconName = focused
          //     ? <Image source={require('../../public/navigation/mypage-on.png')} />
          //     : <Image source={require('../../public/navigation/mypage-off.png')} />
          // }
          // return <Image source={iconName} />;
        // }
      })}
      tabBarOptions={{
        activeTintColor: '#E24E4A',
        inactiveTintColor: '#bdbdbd',
      }}
    >
      <Tab.Screen name='탐색 게시판' component={ListPage} />
      <Tab.Screen name='내 주변' component={MapPage} />
      <Tab.Screen name='채팅' component={ChattingPage} />
      <Tab.Screen name='내 프로필' component={MypagePage} />
    </Tab.Navigator>
  )
}
  
export default TabNavigator