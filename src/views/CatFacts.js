import React, { useState, useEffect, useContext } from "react";
function CatFacts() {
  const [meowFacts, setMeowFacts] = useState([]);
  const [meowPics, setMeowPics] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [fetchTriggered, setFetchTriggered] = useState(false);

  const handelClick = () =>{
    setFetchTriggered(true);
  }

  useEffect(() => {
    //setting page title
    document.title = "Cat Facts";
        //fetching api data
        if(fetchTriggered)
        {
        
        //fetch cat facts
        fetch("https://meowfacts.herokuapp.com/")
        .then((response) => response.json())
        .then((meowFacts) => {
        setMeowFacts(meowFacts);})
        
        //fetch images
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((meowPics) => {
        setMeowPics(meowPics);
        setIsVisible(true);}
        )
        
        .finally(()=>{
          setFetchTriggered(false);
      });
        }
  }, [fetchTriggered]);
  return (
    <>
      <h1 className="d-inline bg-dark text-white">CatFacts</h1>
      <span className="d-block">One meow at a time</span>
      {isVisible && <img src={meowPics[0].url} alt="cat pics form api" className="img-fluid image"/>}
      <p class="text-primary factPara">{meowFacts.data}</p>
      <a href="#" onClick={handelClick} class="btn btn-info">
        Meow it!
      </a>
    </>
  );
}
export default CatFacts;
