import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}

const Profile: React.FC<ProfileProps> = ({ name, email, phone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Profile;
