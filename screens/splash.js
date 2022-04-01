import React, { useState , useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, Alert, TouchableOpacity ,ImageBackground } from 'react-native';

const Splash = ({navigation}) =>{
    const nav=()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        },5000)
    }
    
    useEffect(()=>{
        nav();
    })
    


    return (
        <View style={{flex:1}}>
            <ImageBackground source={require ('./disaster.jpg')} style={{width: '100%', height: '100%'}} >
                <Text style={{color:"#FEEFDD",marginTop:300, textAlign:'center' , fontWeight:'bold' ,fontSize:30 , opacity:0.8}}>
                    
                    
                    NATURAL DISASTER LOCATOR</Text>
            </ImageBackground>
        </View>
    )
}

export default Splash