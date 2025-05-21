import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useSession } from '../hooks/useSession';

const SettingsScreen: React.FC = () => {
  const { logout } = useSession();
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [smsFallbackEnabled, setSmsFallbackEnabled] = useState(true);
  const [attendanceNotificationsEnabled, setAttendanceNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.setting}>
        <Text style={styles.label}>Notificaciones Push</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={setPushNotificationsEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.label}>Fallback SMS</Text>
        <Switch
          value={smsFallbackEnabled}
          onValueChange={setSmsFallbackEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.label}>Notificaciones de Asistencia</Text>
        <Switch
          value={attendanceNotificationsEnabled}
          onValueChange={setAttendanceNotificationsEnabled}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.label}>Contacto del profesor o institución</Text>
        <Text style={styles.value}>profesor@institucion.edu</Text>
      </View>
      <Button title="Cerrar sesión" onPress={handleLogout} />
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
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    color: '#888',
  },
});

export default SettingsScreen;
