//import keyclaok from './keycloak';
import { createContext, useContext, useState, PropsWithChildren } from 'react';

interface AuthContextInterface {
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextInterface);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
