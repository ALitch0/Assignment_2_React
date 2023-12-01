import React, { useState, useEffect, useContext } from "react";
function About(){
    useEffect(()=>{
        //setting page title
        document.title = 'About';
 },[])
    return(
        <>
         <h1>About</h1>
         <p>This is Facts website about cats and dogs. Click the button on the page to get random animal facts and a random picture.</p>
        </>
    )
}
export default About;