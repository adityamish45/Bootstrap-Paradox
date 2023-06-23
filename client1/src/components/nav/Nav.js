import React, { useRef, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router";
import Avatar from "../avatar/Avatar";
import "./Nav.scss";
import {useDispatch, useSelector} from 'react-redux';

function Nav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleLoginClicked() {
        try {
		
			navigate('/login')
		} catch (e) {
			
		}
    }
    async function handleSignupClicked() {
        try {
		
			navigate('/signup')
		} catch (e) {
			
		}
    }

    return (
        <div className="Navbar">
            <div className="container">
                <h2 className="banner hover-link" onClick={() => navigate("/")}>
                    CodersHub
                </h2>
                <div className="right-side">
                    
                    <div className="login hover-link" onClick={handleLoginClicked}>
                        Login<AiOutlineLogin />
                    </div>
                    <div className="login hover-link" onClick={handleSignupClicked}>
                        Signup
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;