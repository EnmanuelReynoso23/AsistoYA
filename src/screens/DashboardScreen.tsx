import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DashboardScreenProps {
  studentName: string;
  attendanceStatus: 'attended' | 'absent' | 'pending';
  lastFacialDetectionTime: string;
  lastRollCallTime: string;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  studentName,
  attendanceStatus,
  lastFacialDetectionTime,
  lastRollCallTime,
}) => {
  const getStatusText = () => {
    switch (attendanceStatus) {
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
      <Text style={styles.label}>Nombre del estudiante:</Text>
      <Text style={styles.value}>{studentName}</Text>
      <Text style={styles.label}>Estado de asistencia actual:</Text>
      <Text style={styles.value}>{getStatusText()}</Text>
      <Text style={styles.label}>Última hora de detección facial:</Text>
      <Text style={styles.value}>{lastFacialDetectionTime}</Text>
      <Text style={styles.label}>Fecha y hora del último pase de lista:</Text>
      <Text style={styles.value}>{lastRollCallTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DashboardScreen;
