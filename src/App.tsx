import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { useSession } from './hooks/useSession';
import { useNotifications } from './hooks/useNotifications';

const App = () => {
  const { sessionCode, login, error } = useSession();
  const { notifications } = useNotifications();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator
        isLoggedIn={!!sessionCode}
        notifications={notifications}
        onConnect={login}
        loginError={error || undefined}
      />
    </>
  );
};

export default App;
