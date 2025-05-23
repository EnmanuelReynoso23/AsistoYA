import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DashboardScreenProps {
  studentName?: string;
  attendanceStatus?: 'attended' | 'absent' | 'pending';
  lastFacialDetectionTime?: string;
  lastRollCallTime?: string;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  studentName = 'Invitado',
  attendanceStatus = 'pending',
  lastFacialDetectionTime = '--:--',
  lastRollCallTime = '--:--',
}) => {
  const getStatusText = (status: 'attended' | 'absent' | 'pending') => {
    switch (status) {
      case 'attended':
        return '✅ Asistió a clases hoy';
      case 'absent':
        return '❌ Ausente hoy';
      case 'pending':
        return '⏳ En espera de confirmación';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel Principal</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nombre del estudiante:</Text>
        <Text style={styles.value}>{studentName}</Text>
        <Text style={styles.label}>Estado de asistencia actual:</Text>
        <Text style={[styles.value, attendanceStatus === 'attended' ? styles.attended : attendanceStatus === 'absent' ? styles.absent : styles.pending]}>{getStatusText(attendanceStatus)}</Text>
        <Text style={styles.label}>Última hora de detección facial:</Text>
        <Text style={styles.value}>{lastFacialDetectionTime}</Text>
        <Text style={styles.label}>Fecha y hora del último pase de lista:</Text>
        <Text style={styles.value}>{lastRollCallTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F7F9FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#007AFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#333',
  },
  value: {
    fontSize: 17,
    marginBottom: 8,
    color: '#555',
  },
  attended: {
    color: '#34C759',
    fontWeight: 'bold',
  },
  absent: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  pending: {
    color: '#FF9500',
    fontWeight: 'bold',
  },
});

// Eliminado todo lo relacionado a useSession, bases de datos o servicios externos
// Este componente ahora es 100% local y solo depende de las props recibidas

export default DashboardScreen;
