import { useState, useEffect } from 'react';

interface Profile {
  name: string;
  email: string;
  phone: string;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Simulate fetching profile data from a mock API
        const response = await fetch('https://mockapi.io/profile');
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError('Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};
