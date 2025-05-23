import React, { useState, useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  // Estado para controlar el login
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [notifications] = useState<any[]>([
    {id: '1', title: 'Bienvenido', message: 'Gracias por usar AsistoYA', timestamp: new Date().toLocaleString(), type: 'push'},
    {id: '2', title: 'Recordatorio', message: 'No olvides confirmar tu asistencia', timestamp: new Date(Date.now() - 3600000).toLocaleString(), type: 'sms'},
    {id: '3', title: 'Clase próxima', message: 'Tu clase de matemáticas comenzará en 30 minutos', timestamp: new Date(Date.now() - 7200000).toLocaleString(), type: 'web-push'}
  ]);
  
  // Limpiar error cuando cambia el estado de login
  useEffect(() => {
    if (loggedIn) {
      setLoginError(undefined);
    }
  }, [loggedIn]);
  
  const handleConnect = async (code: string) => {
    if (code === 'INVITADO' || code.length === 6) {
      setLoggedIn(true);
      return true;
    } else {
      setLoginError('Código inválido o vacío. Intente nuevamente o use el modo invitado.');
      return false;
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginError(undefined);
  };
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator
          isLoggedIn={loggedIn}
          notifications={notifications}
          onConnect={handleConnect}
          onLogout={handleLogout}
          loginError={loginError}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
