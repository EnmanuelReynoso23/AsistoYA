import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen, { NotificationItem } from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AttendanceHistoryScreen from '../screens/AttendanceHistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useProfile } from '../hooks/useProfile';
import { Text } from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  Home: { 
    notifications?: NotificationItem[], 
    profile?: { name: string, email: string, phone: string } 
  };
  Dashboard: undefined;
  AttendanceHistory: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  isLoggedIn: boolean;
  notifications: NotificationItem[];
  onConnect: (code: string) => Promise<boolean>;
  onLogout: () => void;
  loginError?: string;
}

const LoginScreenWrapper = (props: any) => {
  return <LoginScreen onConnect={props.onConnect} error={props.loginError} />;
};

const HomeScreenWrapper = (props: any) => {
  return <HomeScreen 
    notifications={props.notifications} 
    profile={props.profile} 
    attendanceInfo={null} 
  />;
};

const AppNavigator: React.FC<Props> = ({ isLoggedIn, notifications, onConnect, onLogout, loginError }) => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return <Text>Cargando perfil...</Text>;
  }

  if (error) {
    return <Text>Error al cargar perfil: {error}</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={isLoggedIn ? 'Home' : 'Login'}
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => (
            <LoginScreenWrapper
              {...props}
              onConnect={onConnect}
              loginError={loginError}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => (
            <HomeScreenWrapper
              {...props}
              notifications={notifications}
              profile={profile}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="Dashboard"
          options={{ title: 'Panel Principal' }}
        >
          {() => (
            <DashboardScreen
              studentName={profile?.name}
              attendanceStatus="pending"
              lastFacialDetectionTime="--:--"
              lastRollCallTime="--:--"
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="AttendanceHistory"
          options={{ title: 'Historial de Asistencia' }}
          component={AttendanceHistoryScreen}
        />
        
        <Stack.Screen
          name="Settings"
          options={{ title: 'Configuración' }}
        >
          {() => (
            <SettingsScreen onLogout={onLogout} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
