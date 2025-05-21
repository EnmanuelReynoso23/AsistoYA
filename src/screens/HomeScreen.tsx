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
  attendanceInfo: {
    status: string;
    detectionTime: string;
  } | null;
}

const HomeScreen: React.FC<Props> = ({ notifications, profile, attendanceInfo }) => {
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
      {attendanceInfo && (
        <View style={styles.attendanceContainer}>
          <Text style={styles.attendanceTitle}>Información de Asistencia</Text>
          <Text style={styles.attendanceText}>Estado: {attendanceInfo.status}</Text>
          <Text style={styles.attendanceText}>Hora de Detección: {attendanceInfo.detectionTime}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
  notification: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12, marginBottom: 12 },
  type: { fontWeight: 'bold', color: '#007AFF' },
  timestamp: { fontSize: 12, color: '#888', marginTop: 4 },
  attendanceContainer: { marginTop: 16, padding: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 4 },
  attendanceTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  attendanceText: { fontSize: 16, marginBottom: 4 },
});

export default HomeScreen;
