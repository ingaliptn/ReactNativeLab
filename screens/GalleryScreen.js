import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const galleryData = [
  { id: '1', src: require('../assets/gallery-placeholder.png') },
  { id: '2', src: require('../assets/gallery-placeholder.png') },
  { id: '3', src: require('../assets/gallery-placeholder.png') },
  { id: '4', src: require('../assets/gallery-placeholder.png') },
  { id: '5', src: require('../assets/gallery-placeholder.png') },
  { id: '6', src: require('../assets/gallery-placeholder.png') },
  { id: '7', src: require('../assets/gallery-placeholder.png') },
  { id: '8', src: require('../assets/gallery-placeholder.png') },
  { id: '9', src: require('../assets/gallery-placeholder.png') },
  { id: '10', src: require('../assets/gallery-placeholder.png') },
];

const GalleryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.galleryItem}>
      <Image style={styles.image} source={item.src} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={galleryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
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
