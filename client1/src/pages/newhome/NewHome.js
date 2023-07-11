import React, { useEffect } from "react";
import "./NewHome.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

function NewHome() {
    const navigate = useNavigate();

    async function handleLoginClicked() {
        try {
            navigate('/login')
        } catch (e) {
            console.log(e);
        }
    }
    async function handleSignupClicked() {
        try {
            navigate('/signup')
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        // Add smooth scrolling to all links inside the navbar
        const navbarLinks = document.querySelectorAll("nav a");
        navbarLinks.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });

        // Smooth scrolling function
        function smoothScroll(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            const targetPosition = targetSection.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <>
            <div>
                <header>
                    <a href="#" className="logo">
                        Coders Hub
                    </a>
                    <nav>
                        <div class="content">
                            <a href="#home" className="active">
                                Home
                            </a>
                        
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        
                            <div class="login" className="login hover-link" onClick={handleLoginClicked}>
                                Login<AiOutlineLogin />
                            </div>

                            <div class="signup" className="signup hover-link" onClick={handleSignupClicked}>
                                Signup
                            </div>
                        </div>
                    </nav>
                </header>
                <section id="home">Home</section>
                <section id="about">About</section>
                <section id="contact">Contact</section>
            </div>
        </>
    );
}

export default NewHome;