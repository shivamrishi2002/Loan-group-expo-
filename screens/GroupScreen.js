import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function GroupScreen() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState('');

  const addGroup = () => {
    if (name.trim() === '') return;
    setGroups([...groups, { id: Date.now().toString(), name }]);
    setName('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>📂 Groups</Text>
      <TextInput
        placeholder="Enter group name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Add Group" onPress={addGroup} />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item.name}</Text>
        )}
      />
    </View>
  );
}
