// Lógica inicial para integración con Twilio (solo mock)
export const sendSms = async (to: string, body: string): Promise<boolean> => {
  // Aquí iría la llamada real a la API de Twilio
  // Simulación de éxito
  return true;
};

export const receiveSms = async (): Promise<Array<{ id: string; from: string; body: string; timestamp: string }>> => {
  // Simulación de recepción de SMS
  return [];
};
