import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>MyFirstMobApp</Text>
        </View>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Gallery') {
                iconName = 'images';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarLabel: () => null,
            tabBarIconStyle: { marginBottom: -10 }, // move icons up a bit
          })}
          tabBarOptions={{
            showIcon: true,
            style: { backgroundColor: 'white' },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Головна' }} />
          <Tab.Screen name="Gallery" component={GalleryScreen} options={{ tabBarLabel: 'Фотогалерея' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Профіль' }} />
        </Tab.Navigator>
        <View style={styles.footer}>
          <Text>Ткачук Микита Андрійович ІПЗ-20-1</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
  },
  logo: {
    width: 100, // Fixed width for the logo
    height: 30, // Adjust the height to keep the logo proportional
    resizeMode: 'contain', // Ensures the image is fully visible within the specified width
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
});

export default App;
