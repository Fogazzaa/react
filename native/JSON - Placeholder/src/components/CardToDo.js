import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CardToDo = ({ title, completed: initialCompleted, userName }) => {
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Checkbox
          value={completed}
          onValueChange={setCompleted}
          style={styles.checkbox}
          color={completed ? '#000000ff' : '#cccccc'}
        />
        <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
      </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    color: '#333333',
    flexShrink: 1,
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999999',
    fontWeight: '400',
  },
  userName: {
    fontSize: 13,
    color: '#777777',
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: 8,
  },
});

export default CardToDo;
