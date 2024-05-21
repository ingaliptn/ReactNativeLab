import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/ingaliptn/ReactNativeLab1/main/news.json');
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Image style={styles.image} source={{ uri: item.image }} />
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
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <FlatList
          data={newsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
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
