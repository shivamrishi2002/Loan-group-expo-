import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function PersonScreen() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');

  const addPerson = () => {
    if (name.trim() === '') return;
    setPersons([...persons, { id: Date.now().toString(), name }]);
    setName('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>👤 Persons</Text>
      <TextInput
        placeholder="Enter person name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Add Person" onPress={addPerson} />
      <FlatList
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item.name}</Text>
        )}
      />
    </View>
  );
        }
