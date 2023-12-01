import React, { useState, useEffect, useContext } from "react";
function DogFacts() {
  const [dogFacts, setDogFacts] = useState([]);
  const [dogPics, setDogPics] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [fetchTriggered, setFetchTriggered] = useState(false);

  const handelClick = () =>{
    setFetchTriggered(true);
  }

  useEffect(() => {
    //setting page title
    document.title = "Dog Facts";
        //fetching api data
        if(fetchTriggered)
        {
          //dog facts
          const fetchData = async ()=>{
          const url = 'https://dog-facts2.p.rapidapi.com/facts';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '3f71c9cf4fmsh7abecf9cec635c3p165efbjsn456e48eaa14e',
              'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com'
            }
          };
          
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            setDogFacts(result);
            console.log(result[1]);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
        //fetch images
        fetch("https://api.theDogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((dogPics) => {
        setDogPics(dogPics);
        setIsVisible(true);}
        )
        
        .finally(()=>{
          setFetchTriggered(false);
      });
        }
  }, [fetchTriggered]);
  return (
    <>
      <h1 className="d-inline bg-dark text-white">DogFacts</h1>
      <span className="d-block">One dog at a time</span>
      {isVisible && <img src={dogPics[0].url} alt="Dog pics form api" className="img-fluid image"/>}
      <p className="text-primary factPara">{dogFacts.facts}</p>
      <a href="#" onClick={handelClick} class="btn btn-info"> 
        Dog it!
      </a>
    </>
  );
}
export default DogFacts;
