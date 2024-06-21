import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import logo from '../../../assets/pngaaa.com-4205924.png'

export function Logo() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            PASSWORD GENERATOR
        </Text>
        <Image source ={logo} style={styles.logo}
        />
    </View>
  );
}