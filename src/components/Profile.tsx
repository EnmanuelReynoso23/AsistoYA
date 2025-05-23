import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, phone }) => {
  const isGuest = name === 'Invitado' || email === 'invitado@asistoya.com';
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      {isGuest && (
        <View style={styles.guestBadge}>
          <Text style={styles.guestText}>👤 Modo Invitado</Text>
        </View>
      )}
      <View style={styles.row}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>
      {isGuest && (
        <Text style={styles.guestNote}>
          Para acceder a todas las funciones, solicite un código de sesión a su profesor.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: 18,
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    width: 90,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  guestBadge: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BBDEFB',
  },
  guestText: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  guestNote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Profile;
