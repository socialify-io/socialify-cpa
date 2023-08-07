import React from 'react';
import Home from '../screens/home';
import Offers from '../screens/offers';
import Stats from '../screens/stats';
import Payments from '../screens/payments';
import Leaderboard from '../screens/leaderboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 70, height: 70 }}
      source={require('../assets/logo.png')}
    />
  );
}

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1A78C2',
        headerStyle: {
          height: 110,
        },
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <MaterialCommunityIcons name="account" style={{paddingLeft: 30}} size={26} onPress={() => console.log('dupa')}></MaterialCommunityIcons>
        ),
        headerRight: () => (
          <MaterialCommunityIcons name="bell" style={{paddingRight: 30}} size={26} onPress={() => console.log('dupa')}></MaterialCommunityIcons>
        ),
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Offers" component={Offers} options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tag" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Stats" component={Stats} options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Payments" component={Payments} options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Leaderboard" component={Leaderboard} options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};