import { useNavigate } from "react-router-dom";
import "../header-styles/header.css";

export let HeaderComp = () => {
    let navigate = useNavigate();
    return (
      
        <header className="main-header">
            <img className="headerimage logo" src="./assets/images/logo.svg" alt="logo" onClick={() => navigate('/')}/>
            <img className="headerimage profile" src="./assets/images/01.jpg" alt="profile"/>
        </header>
      
    );
  };

