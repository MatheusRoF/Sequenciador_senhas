import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './PassTextInputStyle';

export function PassTextInput() {
  return (
    <View>
        <TextInput 
        style={styles.input}
        placeholder='Pass'
        multiline = {true}
        >        
        </TextInput>
    </View>
  );
}