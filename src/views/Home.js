import React, { useState, useEffect, useContext } from "react";
function Home(){
    useEffect(()=>{
        //setting page title
        document.title = 'Home';
    },[])
    return(
        <>
         <h1>Facts Site</h1>
         <p>Welcom to Fact Site, Navigate to the Fact page using the buttons below!</p>
         <div className="factNavi">
         <a href="/catfacts" class="btn btn-primary">Cat Facts</a>
         <a href="/dogfacts" class="btn btn-primary">Dog Facts</a>
         </div>
        </>
    )
}
export default Home;