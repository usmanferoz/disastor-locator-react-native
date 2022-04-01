import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View ,StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation, route }) => {

    const [data, setData] = useState([])

    const handler = (item)=>{
        navigation.navigate('Map',{item});
    }

    const api = async () => {
        let response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setData(data.events);
    }
    useEffect(() => {
        api();
    }, [])

    return (
        <ScrollView>
            <View>
                {data.map((item) => {
                    return (
                        <View key={item.id} style={Styles.view}>
                            <TouchableOpacity 
                            onPress={()=>{
                                handler(item);
                            }}>
                            <Text style={Styles.item}>{item.title}</Text>
                            <Text style={Styles.item}>{item.id}</Text>
                            <Text style={Styles.item}>Latitude : {item.geometries[0].coordinates[0]} , Longitude : {item.geometries[0].coordinates[1]}</Text>
                            <Text style={Styles.item}>Catagory : {item.categories[0].title}</Text>
                            <Text style={Styles.item}>Click to see on map</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({

    item : {
        fontSize : 15,
        fontWeight: "bold",
        color:"white"
    },
     view : {
         backgroundColor : "#A0AAA6",
         marginTop:15,
         padding:20
     }
})
export default Home;