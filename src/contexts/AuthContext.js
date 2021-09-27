import { createContext, useState, useEffect } from "react";
import { userObserver } from "../helpers/firebase"

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [blogCard,setBlogCard]= useState([])
//   console.log(
//     "🚀 ~ file: AuthContext.js ~ line 10 ~ AuthContextProvider ~ currentUser",
//     currentUser
//   );

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;