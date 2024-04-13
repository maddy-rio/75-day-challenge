import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap';

function FillSquare(square: HTMLDivElement) {
    const currentColor = square.style.backgroundColor;
    if (currentColor === "" || currentColor === "white") {
        square.style.backgroundColor = "#47739f96"; // Toggle on
    } else {
        square.style.backgroundColor = "white"; // Toggle off
    }
}

function Home() {

    const gridItems = [...Array(75).keys()];

    return (
        <>
        <div>
           
<h1>Your 75 Day Challenge</h1>
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

    <Footer/>
    </>
    )
}

export default Home;