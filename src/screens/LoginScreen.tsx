import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onConnect: (code: string) => void;
  error?: string;
}

const LoginScreen: React.FC<Props> = ({ onConnect, error }) => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduce el código de sesión</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Código de sesión"
        autoCapitalize="none"
        keyboardType="default"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Conectar" onPress={() => onConnect(code)} />
      <Text style={styles.explanation}>El profesor le dará el código de sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, width: '80%', marginBottom: 16 },
  error: { color: 'red', marginBottom: 8 },
  explanation: { fontSize: 14, color: '#888', marginTop: 16, textAlign: 'center' },
});

export default LoginScreen;
