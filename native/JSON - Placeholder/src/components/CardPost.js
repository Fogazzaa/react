import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardPost = ({ title, body, userName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.userName}>Por: {userName}</Text>
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
  title: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333333',
  },
  body: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
    marginBottom: 12,
  },
  userName: {
    fontSize: 13,
    color: '#777777',
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: 8,
  },
});

export default CardPost;
