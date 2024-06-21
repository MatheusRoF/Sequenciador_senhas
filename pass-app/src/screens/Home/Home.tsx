import React from "react";
import{Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import {Logo} from '../../components/Logo/Logo'

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer} >
                <Logo/>
            </View>            
            <Text>Home works !!</Text>            
            <StatusBar style="auto" />
       </View> 
    )
}


  