import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NotificationItem as NotificationItemType } from '../screens/HomeScreen';

const NotificationItem: React.FC<{ item: NotificationItemType }> = ({ item }) => (
  <View style={styles.notification}>
    <Text style={styles.type}>{item.type.toUpperCase()}</Text>
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.message}</Text>
    <Text style={styles.timestamp}>{item.timestamp}</Text>
  </View>
);

const styles = StyleSheet.create({
  notification: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12, marginBottom: 12 },
  type: { fontWeight: 'bold', color: '#007AFF' },
  title: { fontSize: 16, fontWeight: 'bold' },
  timestamp: { fontSize: 12, color: '#888', marginTop: 4 },
});

export default NotificationItem;
