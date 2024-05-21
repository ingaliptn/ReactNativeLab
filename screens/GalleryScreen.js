import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const GalleryScreen = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/ingaliptn/ReactNativeLab1/main/gallery.json');
        setGalleryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.galleryItem}>
      <Image style={styles.image} source={{ uri: item.src }} />
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
        <FlatList
          data={galleryData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
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
  galleryItem: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default GalleryScreen;
