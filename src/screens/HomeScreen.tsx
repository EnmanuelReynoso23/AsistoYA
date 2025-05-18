import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Profile from '../components/Profile';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'push' | 'sms' | 'web-push';
}

interface Props {
  notifications: NotificationItem[];
  profile: {
    name: string;
    email: string;
    phone: string;
  };
}

const HomeScreen: React.FC<Props> = ({ notifications, profile }) => {
  return (
    <View style={styles.container}>
      <Profile name={profile.name} email={profile.email} phone={profile.phone} />
      <Text style={styles.title}>Notificaciones recibidas</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.type}>{item.type.toUpperCase()}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
  notification: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12, marginBottom: 12 },
  type: { fontWeight: 'bold', color: '#007AFF' },
  timestamp: { fontSize: 12, color: '#888', marginTop: 4 },
});

export default HomeScreen;
