import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

interface AttendanceRecord {
  date: string;
  status: 'Asistió' | 'Ausente' | 'Llegó tarde';
  detectionTime: string;
}

const AttendanceHistoryScreen: React.FC = () => {
  const [filter, setFilter] = useState<'month' | 'week'>('month');
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    { date: '2025-05-23', status: 'Asistió', detectionTime: '08:02' },
    { date: '2025-05-22', status: 'Asistió', detectionTime: '07:58' },
    { date: '2025-05-21', status: 'Llegó tarde', detectionTime: '08:15' },
    { date: '2025-05-20', status: 'Asistió', detectionTime: '08:05' },
    { date: '2025-05-19', status: 'Ausente', detectionTime: '-' },
    { date: '2025-05-18', status: 'Llegó tarde', detectionTime: '08:20' },
    { date: '2025-05-17', status: 'Asistió', detectionTime: '07:55' },
    { date: '2025-05-16', status: 'Asistió', detectionTime: '08:08' },
  ]);

  const filterRecords = (filter: 'month' | 'week') => {
    setFilter(filter);
    // Aquí podrías filtrar los datos mock si lo deseas
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Asistencia</Text>
      <View style={styles.filterContainer}>
        <Button title="Mes" onPress={() => filterRecords('month')} color={filter === 'month' ? '#007AFF' : '#888'} />
        <Button title="Semana" onPress={() => filterRecords('week')} color={filter === 'week' ? '#34C759' : '#888'} />
      </View>
      <FlatList
        data={attendanceRecords}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <Text style={styles.detectionTime}>{item.detectionTime}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay registros de asistencia.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  record: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  status: {
    fontSize: 16,
    color: '#34C759',
    fontWeight: 'bold',
  },
  detectionTime: {
    fontSize: 14,
    color: '#888',
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

export default AttendanceHistoryScreen;
