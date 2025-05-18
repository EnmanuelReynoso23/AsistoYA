import { useState, useEffect } from 'react';
import { validateSessionCode, saveSessionCode, getSessionCode, clearSessionCode } from '../services/sessionService';

export const useSession = () => {
  const [sessionCode, setSessionCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSessionCode().then(code => {
      setSessionCode(code);
      setLoading(false);
    });
  }, []);

  const login = async (code: string) => {
    setLoading(true);
    setError(null);
    const valid = await validateSessionCode(code);
    if (valid) {
      await saveSessionCode(code);
      setSessionCode(code);
    } else {
      setError('Código inválido');
    }
    setLoading(false);
    return valid;
  };

  const logout = async () => {
    await clearSessionCode();
    setSessionCode(null);
  };

  return { sessionCode, loading, error, login, logout };
};
