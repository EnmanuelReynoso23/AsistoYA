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

// Add logic for handling web push notifications
export const handleWebPushNotification = (notification: any) => {
  // Process the web push notification
  const { title, message, timestamp } = notification;
  return {
    id: notification.id || Date.now().toString(),
    title,
    message,
    timestamp,
    type: 'web-push' as 'web-push',
  };
};
