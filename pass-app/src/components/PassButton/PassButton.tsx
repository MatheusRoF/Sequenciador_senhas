import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './PassButtonStyle';

export function PassButton() {
  return (
    <View style={styles.container}>
        {/* <Button 
        onPress={() => {console.log('Oi!')}} 
        title = "CLICK AQUI"
        accessibilityLabel='click em mim'/> */}

        <Pressable 
            onPress={() => {console.log('Fui Pressionado!')}}
            >
            <Text>😘 COPY</Text>
        </Pressable>

    </View>
  );
}