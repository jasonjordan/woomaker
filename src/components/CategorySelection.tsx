import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from './Checkbox';
import { useSettingsStore } from '../stores/settingsStore';
import { CATEGORIES } from '../constants/categories';
import { theme } from '../theme';

export default function CategorySelection() {
  const { selectedCategories, toggleCategory } = useSettingsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Idea Categories</Text>
      {CATEGORIES.map((category) => (
        <Checkbox
          key={category.id}
          label={category.name}
          checked={selectedCategories.includes(category.id)}
          onToggle={() => toggleCategory(category.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 16,
  },
});