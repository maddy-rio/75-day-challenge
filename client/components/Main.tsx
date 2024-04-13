import Home from './Home'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <main>
      <section id="section-header">
       <img id="logo" src="logo.png"></img>
       <br></br>
       <button ><Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Login to get started</Link></button>

  </section>
    </main>
  )
}

export default Main