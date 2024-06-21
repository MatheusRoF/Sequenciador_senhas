import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './MenuStyles';

interface Props {
    onGeneratePassword: () => void;
    onSettingsPress: () => void;
}
const Menu: React.FC<Props> = ({ onGeneratePassword, onSettingsPress }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <TouchableOpacity onPress={onGeneratePassword}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Generate Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSettingsPress}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Menu;