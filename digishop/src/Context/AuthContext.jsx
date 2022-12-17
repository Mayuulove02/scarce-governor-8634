import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState(null)



    const toggle = () => {
        setIsAuth(!isAuth);
      };
    
    const loginUser = (Name) => {
        setIsAuth(true);
        console.log("LOGIN USER RUNNING APP CONTEXT")
        setUserName(Name)
       // console.log(Name)
      };
    
      const logoutUser = () => {
        setIsAuth(false);
        setUserName(null)
        console.log(isAuth,userName)
      };


  return (
    <AuthContext.Provider value={{isAuth , loginUser ,logoutUser ,toggle ,userName}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider