import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onConnect: (code: string) => Promise<boolean>;
  error?: string;
}

const LoginScreen: React.FC<Props> = ({ onConnect, error }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    if (!code.trim()) {
      return; // No intentar conectar con código vacío
    }
    setLoading(true);
    try {
      const success = await onConnect(code);
      if (!success) {
        // Si hay error, mostrar feedback
        console.log('Error al conectar con código:', code);
      }
    } catch (err) {
      console.error('Error en handleConnect:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    setLoading(true);
    try {
      await onConnect('INVITADO');
    } catch (err) {
      console.error('Error en modo invitado:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a AsistoYA</Text>
      <Text style={styles.subtitle}>Accede con tu código o como invitado</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Código de sesión"
        autoCapitalize="none"
        keyboardType="default"
        editable={!loading}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button 
        title={loading ? "Conectando..." : "CONECTAR"} 
        onPress={handleConnect} 
        disabled={loading} 
        color="#007AFF" 
      />
      <Text style={styles.or}>o</Text>
      <Button 
        title="Entrar como invitado" 
        onPress={handleGuest} 
        color="#34C759" 
        disabled={loading} 
      />
      <Text style={styles.explanation}>El profesor le dará el código de sesión</Text>
      <Text style={styles.footer}>AsistoYA © {new Date().getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#F7F9FA' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8, color: '#007AFF' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, width: '85%', marginBottom: 16, backgroundColor: '#fff', fontSize: 16 },
  error: { color: 'red', marginBottom: 8, fontWeight: 'bold' },
  or: { marginVertical: 12, color: '#888', fontWeight: 'bold', fontSize: 16 },
  explanation: { fontSize: 14, color: '#888', marginTop: 16, textAlign: 'center' },
  footer: { fontSize: 12, color: '#bbb', marginTop: 32 },
});

export default LoginScreen;
