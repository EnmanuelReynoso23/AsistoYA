import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

interface AttendanceRecord {
  date: string;
  status: 'Asistió' | 'Ausente' | 'Llegó tarde';
  detectionTime: string;
}

const AttendanceHistoryScreen: React.FC = () => {
  const [filter, setFilter] = useState<'month' | 'week'>('month');
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    { date: '2023-09-01', status: 'Asistió', detectionTime: '08:00' },
    { date: '2023-09-02', status: 'Ausente', detectionTime: '' },
    { date: '2023-09-03', status: 'Llegó tarde', detectionTime: '08:15' },
  ]);

  const filterRecords = (filter: 'month' | 'week') => {
    // Logic to filter records by month or week
    setFilter(filter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Asistencia</Text>
      <View style={styles.filterContainer}>
        <Button title="Mes" onPress={() => filterRecords('month')} />
        <Button title="Semana" onPress={() => filterRecords('week')} />
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
      />
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  record: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#007AFF',
  },
  detectionTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default AttendanceHistoryScreen;
