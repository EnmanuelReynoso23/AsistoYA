// Este hook ya no es necesario. Archivo vacío para evitar errores de importación.
export const useSession = () => ({
  sessionCode: null,
  attendanceInfo: null,
  loading: false,
  error: null,
  login: async () => true,
  logout: () => {},
});
