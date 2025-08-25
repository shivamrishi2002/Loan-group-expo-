import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function PaymentScreen() {
  const [payments, setPayments] = useState([]);
  const [amount, setAmount] = useState('');

  const addPayment = () => {
    if (amount.trim() === '') return;
    setPayments([...payments, { id: Date.now().toString(), amount }]);
    setAmount('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>💵 Payments</Text>
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Add Payment" onPress={addPayment} />
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, borderBottomWidth: 1 }}>
            ₹ {item.amount}
          </Text>
        )}
      />
    </View>
  );
        }
