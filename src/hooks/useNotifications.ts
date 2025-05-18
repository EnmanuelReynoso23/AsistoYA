import { useEffect, useState } from 'react';
import { onMessageListener, handleWebPushNotification } from '../services/firebaseService';
import { receiveSms } from '../services/twilioService';
import { NotificationItem } from '../screens/HomeScreen';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const unsubscribe = onMessageListener((msg: any) => {
      setNotifications(prev => [
        {
          id: msg.messageId || Date.now().toString(),
          title: msg.notification?.title || 'Push',
          message: msg.notification?.body || '',
          timestamp: new Date().toISOString(),
          type: 'push' as 'push',
        },
        ...prev,
      ]);
    });
    // Cargar historial de SMS
    receiveSms().then(smsList => {
      setNotifications(prev => ([
        ...smsList.map(sms => ({
          id: sms.id,
          title: 'SMS',
          message: sms.body,
          timestamp: sms.timestamp,
          type: 'sms' as 'sms',
        })),
        ...prev,
      ]));
    });

    // Simulate fetching web push notifications
    const fetchWebPushNotifications = async () => {
      // Simulate fetching web push notifications from a mock API
      const response = await fetch('https://mockapi.io/web-push-notifications');
      const data = await response.json();
      setNotifications(prev => ([
        ...data.map((notification: any) => handleWebPushNotification(notification)),
        ...prev,
      ]));
    };

    fetchWebPushNotifications();

    return () => unsubscribe();
  }, []);

  return { notifications };
};
