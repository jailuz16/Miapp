import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { TechnologyItem } from '../components/TechnologyItem';
import { technologies, Technology } from '../data/mockData';
import { Colors } from '../styles/colors';

const TechnologiesScreen = () => {
  const handleTechPress = (tech: Technology) => {
    Alert.alert(
      tech.name,
      `${tech.description}\n\nDificultad: ${tech.difficulty}`,
      [
        { text: 'Cerrar', style: 'cancel' },
        { text: 'Me gusta!', style: 'default' },
      ]
    );
  };

  const renderItem = ({ item }: { item: Technology }) => (
    <TechnologyItem
      technology={item}
      onPress={handleTechPress}
    />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Tecnologías</Text>
      <Text style={styles.subtitle}>
       ¡Exploremos juntos!
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={technologies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
  },
});

export default TechnologiesScreen;