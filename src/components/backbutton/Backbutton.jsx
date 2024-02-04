import React from 'react';
import './backbutton.css';

const Backbutton = () => {
  return (
    <div className="empty__button">
      <div className="button__text">
        <button type="button" onClick={()=>{alert('Back button pressed!')}}>Back</button>
      </div>
    </div>
  )
}

export default Backbutton
