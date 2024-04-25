import { Link } from 'react-router-dom';

function footer() {
 return (
    <section id="section-footer">
        <p className="footer">© 2024 | Designed & coded by Maddy Rio | Logos created with <strong><Link style={{color: "black"}} to="https://www.canva.com/" target='_blank'>Canva</Link></strong></p>
    </section>
 )
}

export default footer;