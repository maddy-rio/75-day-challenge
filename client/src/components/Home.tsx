import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import LogoutButton from './Logout';


function FillSquare(square: HTMLDivElement) {
  const currentColor = square.style.backgroundColor;
  const originalText =square.dataset.originalText || square.innerText;
  if (currentColor === "" || currentColor === "white") {
    square.style.backgroundColor = "#47739f96"; // Toggle on
    square.innerText = "✔️";
    square.dataset.originalText = originalText;
    
  } else {
    square.style.backgroundColor = "white"; // Toggle off
    square.innerText = originalText;
  }
}

function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const gridItems = [...Array(75).keys()];

  return (
    <>
    <div className='home-container'>
      <div>
        <img id="home-logo" src='home.png' alt="Home Logo" />
    
      
    
        <p onClick={toggleModal} className="rules">Challenge Rules</p>
      </div>
    
        <div className="grid-container">
          {gridItems.map(index => (
            <div onClick={(event) => {
              const square = event.currentTarget as HTMLDivElement;
              FillSquare(square);
            }} key={index} className="grid-item">
              {index + 1}
            </div>
          ))}
        </div>
        </div>
  
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            
            <img id="modal-img" src="modal.png"></img>
            <button  onClick={toggleModal}>x</button>
            <p>✦ Eat well 90% of the time and only consume alcohol during special occasions</p>
<p>✦ Work out for 45 minutes per day (with one day of active recovery each week - beginners can start with a shorter workout and build up to 45 minutes a day or split the workout)</p>
<p>✦ Drink two to three liters of water each day</p>
<p>✦ Read 10 pages of your book of choice each day</p>
          </div>
        </div>
      )}
  
    </>
  );
}

export default Home;
