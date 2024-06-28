import React from "react";
import{Text, View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import {Logo} from '../../components/Logo/Logo'
import { PassTextInput } from "../../components/TextInput/PassTextInput";
import { PassButton } from "../../components/PassButton/PassButton";



export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer} >
                <Logo/>
            </View> 
            <View style={styles.inputContainer}>

                <PassTextInput/>
                <PassButton/>
                </View>           
            <Text>Home works !!</Text>            
            <StatusBar style="auto" />
       </View> 
    )
}


  