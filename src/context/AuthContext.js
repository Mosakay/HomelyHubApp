import axios from 'axios';
import React, {createContext} from 'react';
import {BASE_URL} from './config';
import { REACT_APP_BASEURL } from '@env'


export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {

      
//   return (
//     <AuthContext.Provider value="test value">{children}</AuthContext.Provider>
//   );
// };
