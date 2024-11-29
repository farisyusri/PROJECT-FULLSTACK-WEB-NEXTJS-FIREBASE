import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
// Menggunakan path relatif untuk mengimpor firebase_app
import { firebase_app } from "firebase/config.js"; // Path relatif dari folder context ke firebase/config.js

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default firebase_app;
