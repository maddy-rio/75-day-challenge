
import { useAuth0 } from '@auth0/auth0-react';
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'
import LoginButton from './Login';
import LogoutButton from './Logout';
import Home from './Home';


function Main() {

  const { user, logout, loginWithRedirect } = useAuth0()

  


const handleSignOut = () => {
  logout()
}

const handleSignIn = () => {
  loginWithRedirect()
}



return (
  <>

      <IfAuthenticated>
        <div className='header'>
      <img className="user-img" src={user?.picture} alt="User" />
      <div className="dropdown">
            <p className="user">{user?.name}</p>
  <div className="dropdown-content">
   
    <a><LogoutButton /></a>

  </div>
</div>
      
        </div>
        <Home />
      </IfAuthenticated>
      <IfNotAuthenticated>
      <section id="section-header">
 <img id="logo" src="logo.png"></img>
 <br></br>
 </section>
        <LoginButton />
      </IfNotAuthenticated>

    
    
            
        
    
  </>
)
}

export default Main





