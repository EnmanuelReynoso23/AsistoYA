import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import Profile from '../components/Profile';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'push' | 'sms' | 'web-push';
}

interface Props {
  notifications?: NotificationItem[];
  profile?: {
    name: string;
    email: string;
    phone: string;
  };
  attendanceInfo?: {
    status: string;
    detectionTime: string;
  } | null;
}

const HomeScreen: React.FC<Props> = ({ 
  notifications = [], 
  profile = { name: 'Invitado', email: 'invitado@asistoya.com', phone: '---' }, 
  attendanceInfo = null 
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // Feedback visual si no hay notificaciones
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay notificaciones por el momento.</Text>
    </View>
  );

  // Si el usuario es invitado, mostrar mensaje especial
  const isGuest = profile.name === 'Invitado' || profile.email === 'invitado@asistoya.com';

  return (
    <View style={styles.container}>
      <Profile name={profile.name} email={profile.email} phone={profile.phone} />
      {isGuest && (
        <View style={styles.guestBanner}>
          <Text style={styles.guestText}>Estás navegando como invitado. Algunas funciones pueden estar limitadas.</Text>
        </View>
      )}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={[styles.menuButton, styles.menuButtonMain]} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.menuButtonText}>Panel Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.menuButtonHistory]} onPress={() => navigation.navigate('AttendanceHistory')}>
          <Text style={styles.menuButtonText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, styles.menuButtonSettings]} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuButtonText}>Configuración</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Notificaciones recibidas</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.type}>{item.type.toUpperCase()}</Text>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text>{item.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={notifications.length === 0 ? { flex: 1, justifyContent: 'center' } : undefined}
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
  container: { flex: 1, padding: 16, backgroundColor: '#F7F9FA' },
  title: { fontSize: 22, marginBottom: 12, fontWeight: 'bold', color: '#007AFF', textAlign: 'center' },
  notification: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, padding: 14, marginBottom: 12, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 4, elevation: 2 },
  notificationTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 2 },
  type: { fontWeight: 'bold', color: '#007AFF', fontSize: 13 },
  timestamp: { fontSize: 12, color: '#888', marginTop: 4 },
  attendanceContainer: { marginTop: 16, padding: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff' },
  attendanceTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#007AFF' },
  attendanceText: { fontSize: 16, marginBottom: 4 },
  emptyContainer: { alignItems: 'center', marginTop: 32 },
  emptyText: { color: '#888', fontSize: 16 },
  guestBanner: {
    backgroundColor: '#FFF3CD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFECB3',
  },
  guestText: {
    color: '#856404',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 18,
  },
  menuButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    minWidth: 90,
    alignItems: 'center',
  },
  menuButtonMain: {
    backgroundColor: '#007AFF',
  },
  menuButtonHistory: {
    backgroundColor: '#34C759',
  },
  menuButtonSettings: {
    backgroundColor: '#FF9500',
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default HomeScreen;
