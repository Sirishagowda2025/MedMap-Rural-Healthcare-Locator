import { useState, useEffect } from 'react';
import { UserData } from '../types';

const USER_DATA_KEY = 'medmap_user_data';

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_DATA_KEY);
    if (stored) {
      try {
        setUserData(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem(USER_DATA_KEY);
      }
    }
  }, []);

  const saveUserData = (data: UserData) => {
    setUserData(data);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
  };

  const clearUserData = () => {
    setUserData(null);
    localStorage.removeItem(USER_DATA_KEY);
  };

  return {
    userData,
    saveUserData,
    clearUserData,
    isLoggedIn: !!userData
  };
};