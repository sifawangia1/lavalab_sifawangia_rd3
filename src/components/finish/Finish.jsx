import React from 'react';
import './finish.css';



const Finish = () => {

  return (
    <div className="empty__finish__button">
      <div className="finish__button__text">
        <button type="button" onClick={()=>{alert('Finish button pressed!')}}>Finish</button>
      </div>
    </div>
  )
}

export default Finish
