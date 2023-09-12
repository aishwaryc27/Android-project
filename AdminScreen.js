import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AdminScreen from './SettingsScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
});

function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}

export default AdminScreen;
