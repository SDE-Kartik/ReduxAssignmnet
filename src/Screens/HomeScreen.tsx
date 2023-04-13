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

function HomeScreen({ navigation }:any): JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWeather());
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