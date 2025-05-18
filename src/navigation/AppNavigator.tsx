import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen, { NotificationItem } from '../screens/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: { notifications: NotificationItem[] };
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
  return <HomeScreen notifications={props.notifications} />;
};




const AppNavigator: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;