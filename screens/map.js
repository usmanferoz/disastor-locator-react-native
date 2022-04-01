import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Marker } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ navigation, route }) => {
    const { item } = route.params;
    const [data, setData] = useState([])
    console.log(item.geometries);

    return (
        <View>
            <View style={styles.display}>
            <Text style={styles.item}>Title : {item.title}</Text>
            <Text style={styles.item}>Catagory : {item.categories[0].title}</Text>
            </View>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: item.geometries[0].coordinates[1],
                        longitude: item.geometries[0].coordinates[0],
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker
                        key={item.id}
                        coordinate={{
                            latitude: item.geometries[0].coordinates[1],
                            longitude: item.geometries[0].coordinates[0],
                        }}
                    />
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        marginTop:15,
        marginBottom:15,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 100
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    item : {
        fontSize : 15,
        fontWeight: "bold",
        color:"black"
    },
})
export default Map;