import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EnhancedNotificationItemProps {
  title: string;
  message: string;
  timestamp: string;
  type: 'push' | 'sms';
}

const EnhancedNotificationItem: React.FC<EnhancedNotificationItemProps> = ({ title, message, timestamp, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type.toUpperCase()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  type: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default EnhancedNotificationItem;
