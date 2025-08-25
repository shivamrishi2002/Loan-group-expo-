import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Loan Group App</Text>
      <Button title="Go to Groups" onPress={() => navigation.navigate('Groups')} />
      <Button title="Go to Persons" onPress={() => navigation.navigate('Persons')} />
      <Button title="Go to Payments" onPress={() => navigation.navigate('Payments')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
