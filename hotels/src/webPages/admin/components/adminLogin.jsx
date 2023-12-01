import style from "../admin-styles/admin.module.css";
import "../admin-js/admin.js";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export let AdminLogin = () => {

    let navigate = useNavigate();

    let [ adminCredentials, setAdminCredentials ] = useState({ email : "", password : "" });

    let emailRef = useRef();
    let passwordRef = useRef();

    let submitHandler = () => {
        let dataObject = JSON.parse(localStorage.getItem("adminData"));
        if(adminCredentials.email.length!==0 && adminCredentials.password.length!==0){
            if(dataObject.email === adminCredentials.email && dataObject.password === adminCredentials.password ){
                alert("logged in successfully");
                emailRef.current.value = "";
                passwordRef.current.value = "";
                navigate('/adminLanding');
            }
            else{
                alert("you have entered wrong credentials");
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
        }
        else{
            alert("please fill all the credentials")
        }
    }

    return <div>
        <div className={style.main_container}>
            
            <img src="./assets/images/logo.svg" alt="logo" className={style.logo}/>
 
            
            <div className={style.email_container}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} name="email" onChange={ (event) => setAdminCredentials({...adminCredentials, email : event.target.value}) } className={style.email_field} required/>
            </div>

            <div className={style.password_container}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={passwordRef} name="password" onChange={ (event) => setAdminCredentials({...adminCredentials, password : event.target.value}) } className={style.password_field} required/>
            </div>
            
            <button type="submit" onClick={submitHandler} className={style.submit_button}>Sign In</button>
        </div>
    </div>
}