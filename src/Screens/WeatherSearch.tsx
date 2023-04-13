import {useNavigation, useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
  RefreshControl,
  Modal,
} from 'react-native';
import {getWeather} from '../ReduxStore/Actions';
import {WeatherState} from '../ReduxStore/Reducer';
import { RootStackParamList } from "../Navigation/MainNavigation";
import {StackNavigationProp} from '@react-navigation/stack';

type DescriptionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WeatherApp'
>;

interface Props {
  navigation: DescriptionNavigationProp;
}

const WeatherSearch = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.weather.weatherData);

  const [filteredData, setFilteredData] = useState<any>([]);
  const [masterData, setMasterData] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFilteredData(data);
    setMasterData(data);
  }, []);
  const searchFilter = (text: any) => {
    if (text) {
      const newData: any = [];
      newData.push(
        masterData.filter((item: any) => {
          const itemData = item.city.toUpperCase()
            ? item.city.toUpperCase()
            : '';
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }),
      );
      // console.log('New Data');
      // console.log(newData[0]);
      setFilteredData(newData[0]);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />

      <View style={styles.headerView}>
        <Text style={styles.header}>Weather Application</Text>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.SearchIcon}></View>
        <View style={styles.searchBarText}>
          <TextInput
            style={{fontSize: 16}}
            value={search}
            placeholderTextColor="grey"
            placeholder="Search..."
            onChangeText={text => searchFilter(text)}
          />
        </View>
      </View>

      <View style={styles.flatList}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CityDetails', {
                  city: item.city,
                  temperature: item.temperature,
                  lat: item.lat,
                  lng: item.lng,
                  language:item.language
                });
              }}>
              <View style={styles.item}>
                <Text style={styles.heading}>{item.city}</Text>
                <Text style={styles.heading}>{item.temperature}* C</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default WeatherSearch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  headerView: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    color: 'black',
  },
  searchBar: {
    flexDirection: 'row',
    height: 50,
    width: '95%',
    borderWidth: 1.5,
    borderColor: '#009688',
    marginBottom: 8,
    marginTop: 24,
    borderRadius: 50,
  },
  SearchIcon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  searchBarText: {
    width: '85%',
  },
  flatList: {
    flex: 1,
    width: '70%',
  },
  companyName: {
    color: 'gray',
    alignSelf: 'center',
    fontFamily: 'Alexandria-Regular',
  },
  item: {
    width: '90%',
    borderRadius: 25,
    paddingHorizontal: 48,
    paddingVertical: 24,
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 1.5,
    backgroundColor: 'pink',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop:5,
  },
});
