
import { useAuth0 } from '@auth0/auth0-react';
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import LoginButton from './Login';
import LogoutButton from './Logout';
import Home from './Home';
import Footer from './Footer';


function Main() {

  const { user, logout, loginWithRedirect } = useAuth0()

  


const handleSignOut = () => {
  logout()
}

const handleSignIn = () => {
  loginWithRedirect()
}

console.log(user)

return (
  <>

      <IfAuthenticated>
     
    <a ><LogoutButton /></a>
        <Home />
        <Footer />
      </IfAuthenticated>
      <IfNotAuthenticated>
  
      <section id="section-header">
      <div className="container">
        <div className='container-content'>
 <img id="logo" src="logo.png"></img>
 <br></br>
 <LoginButton />
 </div>
 </div>
 </section>


      </IfNotAuthenticated>

    
    
            
        
    
  </>
)
}

export default Main





