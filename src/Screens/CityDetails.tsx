import react from "react";
import { View, Text, StyleSheet, ScrollView,StatusBar } from "react-native";
import { RouteProp } from '@react-navigation/native';

// type RootStackParamList = {
//     Citydetails: {
//       city: string;
//       temperature: string;
//       lat: string;
//       lng: string;
//       language: string;
//     };
//   };
//   type CitydetailsScreenRouteProp = RouteProp<RootStackParamList, 'Citydetails'>;
// type CitydetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Citydetails'>;

// type Props = {
//   route: CitydetailsScreenRouteProp;
//   Navigation: CitydetailsScreenNavigationProp;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();
// import { RootStackParamList } from "../Navigation/MainNavigation";
// type ScreenBNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CityDetails'>;
// type ScreenBRouteProp = RouteProp<RootStackParamList, 'CityDetails'>;

// type Props = {
//   Navigation: ScreenBNavigationProp;
//   route: ScreenBRouteProp;
// };
import { RootStackParamList } from "../Navigation/MainNavigation";
import {StackNavigationProp} from '@react-navigation/stack';

type DescriptionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CityDetails'
>;

interface Props {
  navigation: DescriptionNavigationProp;
}
type DescriptionScreenProps = {
  route: RouteProp<RootStackParamList, 'CityDetails'>;
};
const CityDetails = ({ route }: DescriptionScreenProps) => {
    const { city, temperature, lat, lng, language } = route.params;
    return (
        <ScrollView>
            <StatusBar
            hidden={true}
            />
            <View style={styles.container}>
                <View style={styles.nameView}>
                    <Text style={styles.name}>{city}</Text>
                    <Text style={styles.name}>{temperature}* C</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.detailHeaderView}>
                        <Text style={styles.detailHeader}>Details</Text>
                    </View>
                    <View style={styles.detailsView}>
                        <View>
                            <Text style={styles.content}><Text style={styles.parameter}>City : </Text>{city}</Text>
                            <Text style={styles.content}><Text style={styles.parameter}>Temperature : </Text>{temperature}</Text>
                            <Text style={styles.content}><Text style={styles.parameter}>Latitude : </Text>{lat}</Text>
                            <Text style={styles.content}><Text style={styles.parameter}>Longitude : </Text>{lng}</Text>
                            <Text style={styles.content}><Text style={styles.parameter}>Language : </Text>{language}</Text>
                        </View>
                    </View>
                </View>

            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    nameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#f4d5d8',
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 2,
        paddingVertical:10,
        borderRadius:15,
    },
    name: {
        fontFamily: 'Alexandria-Bold',
        fontSize: 32,
        color: 'black',
        letterSpacing: 2,
    },
    // scrollview: {
    //     width: '100%',
    //     alignSelf: 'center',
    //     backgroundColor: '#efc1c4',
    //     borderRadius: 10,
    //     marginVertical: 10,
    // },
    details: {
        flex: 1,
        width: '95%',
        padding: 10,
    },
    detailHeaderView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    detailHeader: {
        fontSize: 32,
        fontFamily: 'Alexandria-Bold',
        color: 'black',
        letterSpacing: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    detailsView: {
        borderRadius:15,
        width: '100%',
        backgroundColor: 'pink',
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
        borderWidth:2,
        borderColor:'black',
    },
    detailsSubhedder:{
        fontSize:22,
        alignSelf:'center',
        fontFamily:'Alexandria-Medium',
        color:'black',
    },
    content:{
        fontSize:16,
        marginVertical:10,
        color:'black',
    },
    parameter:{
        fontWeight:'bold',
        color:'black',
        
    }
})

export default CityDetails;