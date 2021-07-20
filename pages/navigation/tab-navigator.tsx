import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListPage from '../screens/meetings'
import MapPage from '../screens/map';
import MypagePage from '../screens/mypage';
import ChattingPage from '../screens/chatting';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  
  return (
    <Tab.Navigator>
      <Tab.Screen name='meetings' component={ListPage} />
      <Tab.Screen name='map' component={MapPage} />
      <Tab.Screen name='chatting' component={ChattingPage} />
      <Tab.Screen name='mypage' component={MypagePage} />
    </Tab.Navigator>
  )
}
  
export default TabNavigator