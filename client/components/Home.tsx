import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import LogoutButton from './Logout';


function FillSquare(square: HTMLDivElement) {
  const currentColor = square.style.backgroundColor;
  const originalText = square.dataset.originalText || square.innerText;

  if (currentColor === "" || currentColor === "white") {
    square.style.backgroundColor = "#47739f96"; // Toggle on
    square.innerText = "✔️";
    square.dataset.originalText = originalText;

    // Store the selected square in local storage
    localStorage.setItem(square.id, "selected");
  } else {
    square.style.backgroundColor = "white"; // Toggle off
    square.innerText = originalText;

    // Remove the selected square from local storage
    localStorage.removeItem(square.id);
  }
}

// Retrieve selected squares when the user logs back in
const selectedSquares = Object.keys(localStorage).filter(key => localStorage.getItem(key) === "selected");
selectedSquares.forEach(squareId => {
  const square = document.getElementById(squareId);
  if (square) {
    square.style.backgroundColor = "#47739f96"; // Toggle on
    square.innerText = "✔️";
    square.dataset.originalText = square.innerText;
  }
});


function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const gridItems = [...Array(75).keys()];

  return (
    <>
      <div>
        <img id="home-logo" src='home.png' alt="Home Logo" />
    
      
    
        <p onClick={toggleModal} className="rules">Challenge Rules</p>
      </div>
      <Container>
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
      </Container>
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
