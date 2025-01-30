import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/authentication");
    }, [])
    return (
        <div className="main_container">
            Hello
        </div>
    );
}
