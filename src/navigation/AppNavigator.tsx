import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen, { NotificationItem } from '../screens/HomeScreen';
import { useProfile } from '../hooks/useProfile';
import { Text } from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  Home: { notifications: NotificationItem[], profile: { name: string, email: string, phone: string } };
};

const Stack = createStackNavigator<RootStackParamList>();

interface Props {
  isLoggedIn: boolean;
  notifications: NotificationItem[];
  onConnect: (code: string) => void;
  loginError?: string;
}

const LoginScreenWrapper = (props: any) => {
  // Recibe onConnect y loginError como props
  return <LoginScreen onConnect={props.onConnect} error={props.loginError} />;
};

const HomeScreenWrapper = (props: any) => {
  return <HomeScreen notifications={props.notifications} profile={props.profile} />;
};

const AppNavigator: React.FC<Props> = ({ isLoggedIn, notifications, onConnect, loginError }) => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return <Text>Cargando perfil...</Text>;
  }

  if (error) {
    return <Text>Error al cargar perfil: {error}</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" id={undefined}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {props => (
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
          {props => (
            <HomeScreenWrapper
              {...props}
              notifications={notifications}
              profile={profile}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
