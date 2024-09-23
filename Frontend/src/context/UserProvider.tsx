import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from 'react';
interface UserContextType{
    userName: string,
    setUserName: (name: string) => (void),
    logout : () => (void),
};

const UserContext = createContext<UserContextType|undefined>(undefined);

export const UserProvider = ({ children } : {children : ReactNode}) => {
    const [userName, setUserName] = useState<string>("");
    const logout = () => {
        setUserName("");
      };
  return (
    <UserContext.Provider value={{userName, setUserName, logout}}>
        { children }
    </UserContext.Provider>
  )
};

export const useUserContext = () =>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUserContext must within a user provider");
        
    }
    return context;
}
