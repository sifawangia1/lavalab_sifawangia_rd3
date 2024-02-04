import React from 'react';
import pfp from '../../assets/pfp.png'
import './navbar.css';

const Navbar = () => {
  return (
    <div className="hive__navbar">

      <div className="hive__logo">
        hive
      </div>
      <div className="mask__group">
          <div className="pfp" onClick={()=>{alert('Profile clicked!')}}>
            <img id="pfp" src={pfp} alt="profile" />
          </div>
      </div>
      <div className="vector">

      </div>
    
    </div>
  )
}

export default Navbar