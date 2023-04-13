import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import WeatherSearch from '../Screens/WeatherSearch';
import {useDispatch} from 'react-redux';
import {getWeather} from '../ReduxStore/Actions';
import HomeScreen from '../Screens/HomeScreen';
import CityDetails from '../Screens/CityDetails';

export type RootStackParamList = {
  WeatherApp: undefined;
  Home: undefined;
  CityDetails: {
    city: string;
    temperature: String;
    lat: string;
    lng: string;
    language: string;
  };
  // AddToDo: undefined;
  // Description: {todo:string,desc:string, index:number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WeatherApp" component={WeatherSearch} />
        <Stack.Screen name="CityDetails" component={CityDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
