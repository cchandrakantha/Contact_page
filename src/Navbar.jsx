import React from 'react'

 function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='nav-image'>
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'/>
      </div>
      <div>
        <ul className='nav-items'>
            <li>Home</li>
            <li>Loaction</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}
export default Navbar;