import React, { useEffect } from "react";
import Nav from ".//../../components/nav/Nav";
function NewHome() {
    
    return (
        <>
            <Nav />
            <div className="home">
                <h1>Welcome to My Website!</h1>
                <p>This is the home page of my awesome website.</p>
                {/* Add your desired content here */} 
            </div>
            
            
        </>
    );
}

export default NewHome;