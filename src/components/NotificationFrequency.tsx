import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSettingsStore } from '../stores/settingsStore';
import { CONFIG } from '../config';
import { theme } from '../theme';

export default function NotificationFrequency() {
  const { notificationsPerDay, setNotificationsPerDay } = useSettingsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ideas per day:</Text>
      <Slider
        style={styles.slider}
        minimumValue={CONFIG.MIN_NOTIFICATIONS_PER_DAY}
        maximumValue={CONFIG.MAX_NOTIFICATIONS_PER_DAY}
        step={1}
        value={notificationsPerDay}
        onValueChange={setNotificationsPerDay}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.border}
        thumbTintColor={theme.colors.primary}
      />
      <Text style={styles.value}>{notificationsPerDay}</Text>
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
  slider: {
    height: 40,
  },
  value: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 8,
  },
});