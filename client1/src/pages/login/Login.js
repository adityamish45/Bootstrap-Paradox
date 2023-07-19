import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import Nav from ".//../../components/nav/Nav";
import {axiosClient} from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/auth/login', {
                email,
                password
            }); 

            setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div>
                <header>
                    <a href="#" className="logo">
                        Coders Hub
                    </a>
                    <nav>
                    <div class="content">
                        <a href="#" className="active">
                            Home
                        </a>
                        
                        <a href="##about">About</a>
<<<<<<< HEAD
                        <a href="#contact">Contact</a>
=======
                        <a href="##contact">Contact</a>
>>>>>>> e3fe8097cd7d91c6156b5b4fcdd70ae00d8dbfd4
                        
                            
                            </div>
                    </nav>
                </header>
                
            </div>
            <Nav/>
            <div className="Login">
                
            <div className="login-box">
                <h2 className="heading">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" className="submit" />
                </form>
                <p className="subheading">
                    Do not have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
            </div>
            </>
    );
    
}

export default Login;