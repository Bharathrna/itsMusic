import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import SearchScreen from '../Screens/Search/SearchScreen';
import YourLibraryScreen from '../Screens/Library/YourLibraryScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';


const HomeStackNavigator = createStackNavigator();
const SearchStackNavigator = createStackNavigator();
const LibraryStackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

const HomeNavigator = () => {
    return <HomeStackNavigator.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStackNavigator.Screen name = "Home" component = {HomeScreen}/>
        </HomeStackNavigator.Navigator>
}

const SearchNavigator = () => {
    return <SearchStackNavigator.Navigator screenOptions={{
        headerShown: false
      }}>
        <SearchStackNavigator.Screen name = "Search" component = {SearchScreen}/>
        </SearchStackNavigator.Navigator>
}

const LibraryNavigator = () => {
    return <LibraryStackNavigator.Navigator screenOptions={{
        headerShown: false
      }}>
        <LibraryStackNavigator.Screen name = "Library" component = {YourLibraryScreen}/>
        </LibraryStackNavigator.Navigator>
}

export const BottomNavigator = () => {
    return (
        <BottomTabNavigator.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                backgroundColor:'rgba(52, 52, 52, 0.2)',
                borderTopWidth: 0,
                position: 'absolute',
                elevation: 0 ,
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
          }}>
          <BottomTabNavigator.Screen name="Home Tab" component={HomeNavigator} options={{ 
              tabBarIcon: (props) => {
                return (
                  <MaterialIcons
                    name="home-filled"
                    size={moderateScale(25)}
                    color= {props.color}
                  />
                );
              },
              tabBarLabel: (props) => (
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Medium',
                    fontSize: moderateScale(9),
                    color: props.color,
                    paddingBottom: moderateScale(5),
                  }}>
                  Home
                </Text>
              ),
          }} />
          <BottomTabNavigator.Screen name="Search Tab" component={SearchNavigator} options ={{
              tabBarIcon: (props) => {
                return (
                  <Ionicons
                    name="md-search-outline"
                    size={moderateScale(25)}
                    color= {props.color}
                  />
                );
              },
              tabBarLabel: (props) => (
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Medium',
                    fontSize: moderateScale(9),
                    color: props.color,
                    paddingBottom: moderateScale(5),
                  }}>
                  Search
                </Text>
              ),
          }} />
          <BottomTabNavigator.Screen name="Your Library Tab" component={LibraryNavigator} options = {{
               tabBarIcon: (props) => {
                return (
                  <MaterialCommunityIcons
                    name="bookshelf"
                    size={moderateScale(25)}
                    color= {props.color}
                  />
                );
              },
              tabBarLabel: (props) => (
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Medium',
                    fontSize: moderateScale(9),
                    color: props.color,
                    paddingBottom: moderateScale(5),
                  }}>
                  Your Library
                </Text>
              ),
          }} />
        </BottomTabNavigator.Navigator>
      );    
}