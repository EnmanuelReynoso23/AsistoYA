// Configuración y lógica de Firebase Messaging
import messaging from '@react-native-firebase/messaging';

export const requestFirebasePermission = async () => {
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

export const getFcmToken = async (): Promise<string | null> => {
  return messaging().getToken();
};

export const onMessageListener = (callback: (msg: any) => void) => {
  return messaging().onMessage(async remoteMessage => {
    callback(remoteMessage);
  });
};
