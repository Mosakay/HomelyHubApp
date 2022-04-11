
import React, {createContext} from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = React.useState({});

  return (
      <AuthContext.Provider value={{ auth, setAuth }}>
          {children}
      </AuthContext.Provider>
  )
};
