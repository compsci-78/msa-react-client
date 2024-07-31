import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/index";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({name:'',userRole:''});
  const [isAuth,setIsAuth] = useState(false);
  const navigate = useNavigate();

  const loginAction = async () => {
    axios.get("/account/login")
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error);
    })

  };

  const logOut = () => {
    axios.get("/account/logout")
    .then(response =>{
      console.log(response.data);
      navigate("/login");
    })
    .catch(error =>{
      console.log(error);
    })
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};