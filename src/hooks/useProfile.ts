import { useState } from 'react';

interface Profile {
  name: string;
  email: string;
  phone: string;
}

export const useProfile = () => {
  // Siempre modo invitado
  const [profile] = useState<Profile>({
    name: 'Invitado',
    email: 'invitado@asistoya.com',
    phone: '---',
  });
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return { profile, loading, error };
};
