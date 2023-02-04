import { useReducer } from 'react';

import { type } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

// const initialState = {
//   logged: false
// }

// Función inicializadora del state
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    // !! -> user existe?
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name }

    const action = {
      type: type.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');

    const action = { type: type.logout }

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
};
