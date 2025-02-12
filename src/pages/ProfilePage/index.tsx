import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import axios from "axios";
import { doSignOut } from "react-auth-kit/utils/reducers";

export default function ProfilePage() {
    const navigate = useNavigate();
    const signOut = useSignOut();
    
    const checkAuth = async () => {
        let token: string | null = localStorage.getItem("accessToken");
      
        if (!token) {
          try {
            const response = await axios.get<{ accessToken: string }>(
              "http://localhost:4400/refresh", 
              { withCredentials: true }
            );
            token = response.data.accessToken;
            localStorage.setItem("accessToken", token);
          } catch (err) {
            console.error("Ошибка автообновления токена", err);
            navigate("/log-in");
            return;
          }
        }
      
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
      };
      
      useEffect(() => {
        checkAuth();
      }, []);

    const logOut = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4400/logout", 
                { withCredentials: true }
            );

            signOut();
            localStorage.removeItem("accessToken");
            navigate("/log-in")
        } catch (err) {
            console.log(err);
        }
    }      
      
    return (
        <div className="main_container">
            Hello
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}
