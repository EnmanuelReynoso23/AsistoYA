import React from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

interface Props {
  onLogout?: () => void;
}

const SettingsScreen: React.FC<Props> = ({ onLogout }) => {
  // Solo lógica local, sin logout real
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = React.useState(true);
  const [smsFallbackEnabled, setSmsFallbackEnabled] = React.useState(true);
  const [attendanceNotificationsEnabled, setAttendanceNotificationsEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.settingRow}>
        <Text style={styles.label}>Notificaciones Push</Text>
        <Switch value={pushNotificationsEnabled} onValueChange={setPushNotificationsEnabled} thumbColor={pushNotificationsEnabled ? '#007AFF' : '#ccc'} trackColor={{ true: '#B2DFFC', false: '#eee' }} />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.label}>Fallback SMS</Text>
        <Switch value={smsFallbackEnabled} onValueChange={setSmsFallbackEnabled} thumbColor={smsFallbackEnabled ? '#34C759' : '#ccc'} trackColor={{ true: '#B7F7C2', false: '#eee' }} />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.label}>Notificaciones de Asistencia</Text>
        <Switch value={attendanceNotificationsEnabled} onValueChange={setAttendanceNotificationsEnabled} thumbColor={attendanceNotificationsEnabled ? '#FF9500' : '#ccc'} trackColor={{ true: '#FFE5B2', false: '#eee' }} />
      </View>
      <View style={styles.divider} />
      <View style={styles.settingRow}>
        <Text style={styles.label}>Contacto del profesor o institución</Text>
        <Text style={styles.value}>profesor@institucion.edu</Text>
      </View>
      <View style={styles.logoutContainer}>
        <Button 
          title="Cerrar sesión" 
          onPress={onLogout || (() => console.log('Logout no implementado'))}
          color="#D32F2F"
        />
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#007AFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 17,
    color: '#333',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#888',
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 18,
  },
  logoutContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
});

export default SettingsScreen;
