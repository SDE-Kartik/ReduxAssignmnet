import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../ReduxStore/Actions';
import { RootStackParamList } from "../Navigation/MainNavigation";
import {StackNavigationProp} from '@react-navigation/stack';

type DescriptionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: DescriptionNavigationProp;
}


function HomeScreen({ navigation }:Props): JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("Inside useEffect");
        console.log(dispatch(getWeather()));
        console.log("Inside useEffect");
      }, []);
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("WeatherApp")}
        >
            <View style={styles.button}>
                <Text style={{fontWeight:'bold', fontSize:16}}> Go To Weather App </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor:'red',
        paddingVertical:25,
        paddingHorizontal:20,
        borderRadius:10,
    }
});