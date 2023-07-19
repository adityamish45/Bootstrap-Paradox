import React, { useEffect , useState } from "react";
import "./NewHome.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import img1 from "./../../assets/img1.jpg";
import Quote from "./quotes/quotesApi"
import Quotes from "./quotes/Quotes";


function NewHome() {
    const [quoteData, setQuoteData] = useState(Quote);

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
                        CodersHub
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
                <section id="home">
                    <div className="banner">
                        <div className="banner-content center">
                            <h2 className="heading">Innovate , Iterate , Illuminate</h2>
                            <p className="subheading">A Hub for Code Enthusiasts Connecting the Minds Worldwide</p>

                        </div>
                    </div>
                    
                    
                     
                    <div className="collection container">
                          <h1 className="insight center">Some Key Insights</h1>
                        <div className="content">
                            <Quotes quoteData={quoteData}/>
                            
                        </div>
                    </div>

                </section>


                <section id="about">
                    <div className="heading">
                        <h1>About Us</h1>
                        <p>Empowering the world to develop technology through collective knowledge.</p>
                    </div>
                    <section className="about-us">
                        <img src={img1} alt="imagegroup" />
                        <div className="content1">
                            <h2>
                                A Public Platform where developers and technologists go to gain and share knowledge.
                            </h2>
                            <h3>Our Core Values :-</h3>
                            <ul>
                                <li>Community is at the heart of everything we do.Nurture healthy communities where everyone is encouraged to learn and give back</li>
                                <li>Creates Space for different voices to be heard where a diverse group of people collaborate in an environment of respect and trust.</li>
                                <li>Promotes Curiosity and Eagerness to learn with a growth mindset for all.</li>
                                <li>Empowers individuals and fosters a vibrant coding community which can provide innovative solutions to your problems.</li>
                            </ul>
                            <h2>Thank you for visiting our website and happy coding!</h2>
                        </div>
                    </section>
                </section>
                <section id="contact">Contact</section>
            </div>
        </>
    );
}

export default NewHome;