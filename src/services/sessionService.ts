import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'asistoya_session_code';

export const validateSessionCode = async (code: string): Promise<boolean> => {
  // Simulación de validación contra endpoint REST
  // Reemplazar por llamada real a la API
  return code.length === 6;
};

export const saveSessionCode = async (code: string) => {
  await AsyncStorage.setItem(SESSION_KEY, code);
};

export const getSessionCode = async (): Promise<string | null> => {
  return AsyncStorage.getItem(SESSION_KEY);
};

export const clearSessionCode = async () => {
  await AsyncStorage.removeItem(SESSION_KEY);
};
