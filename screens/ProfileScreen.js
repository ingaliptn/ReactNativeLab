import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Електронна пошта" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry />
      <TextInput style={styles.input} placeholder="Пароль (ще раз)" secureTextEntry />
      <TextInput style={styles.input} placeholder="Прізвище" />
      <TextInput style={styles.input} placeholder="Ім'я" />
      <Button title="Зареєструватися" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
