import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CardToDo = ({ title, completed: initialCompleted, userName }) => {
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <View style={[styles.card, completed && styles.cardCompleted]}>
      <View style={styles.row}>
        <Checkbox
          value={completed}
          onValueChange={setCompleted}
          style={styles.checkbox}
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
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#FF0000',
    transition: 'all 0.3s ease-in-out',
  },
  cardCompleted: {
    borderLeftColor: '#4CAF50',
    opacity: 0.8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 12,
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#888',
  },
  title: {
    fontSize: 17,
    color: '#333333',
    flex: 1,
    fontWeight: '600',
    lineHeight: 24,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  userName: {
    fontSize: 12,
    color: '#666666',
    fontStyle: 'normal',
    textAlign: 'right',
    marginTop: 6,
  },
});

export default CardToDo;
