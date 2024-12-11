import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategorySelection from '../components/CategorySelection';
import NotificationFrequency from '../components/NotificationFrequency';
import { theme } from '../theme';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <CategorySelection />
        <NotificationFrequency />
        <Text style={styles.description}>
          You will receive random notifications throughout the day with new ideas to surprise your partner.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: 16,
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
});