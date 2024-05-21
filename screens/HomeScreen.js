import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const newsData = [
  { id: '1', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '2', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '3', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '4', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '5', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '6', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '7', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '8', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '9', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '10', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Image style={styles.image} source={require('../assets/news-placeholder.png')} />
      <View style={styles.newsText}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDate}>{item.date}</Text>
        <Text style={styles.newsSummary}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Новини</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    marginBottom: 10,
  },
  newsItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  newsText: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDate: {
    fontSize: 12,
    color: 'gray',
  },
  newsSummary: {
    fontSize: 14,
  },
});

export default HomeScreen;
