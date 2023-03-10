import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEYS } from '../localstorage/localstorageKeys';
import { User } from '../models/User';

interface IUserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const checkUserLoggedIn = () => {
    console.log('check user logged in');
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
