import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>💰 Loan Group App</Text>
      <Button title="Groups" onPress={() => navigation.navigate('Groups')} />
      <Button title="Persons" onPress={() => navigation.navigate('Persons')} />
      <Button title="Payments" onPress={() => navigation.navigate('Payments')} />
    </View>
  );
}
