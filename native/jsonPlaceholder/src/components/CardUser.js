import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardUser = ({ name, email, companyName, zipcode }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.detail}>Empresa: {companyName}</Text>
      <Text style={styles.detail}>CEP: {zipcode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    borderLeftWidth: 5,
    borderLeftColor: '#000000ff',
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 6,
    color: '#333333',
  },
  email: {
    fontSize: 15,
    color: '#555555',
    marginBottom: 10,
  },
  detail: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },
});

export default CardUser;
