import React from "react";
import ReactDOM from "react-dom";
import Map from './Map.jsx';
const About = ({children, onClose, open}) => 
  
  open ?
  ReactDOM.createPortal(
    <div className='modal'>
      <div className='overlay' style={{    
      position: 'fixed',
      top: '0',
      background: 'rgba(0,0,0, 0.4)',
      width: '100%',
      height: '100%',
      left: '0',
    }}>
        <div className='content' style={
          { width: '90%',
            background: 'white',
            padding: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          <div className='modal_close' onClick={onClose}>&times;</div>
          <div>Map should be here</div>
        </div>
     </div>
  </div>,
  document.getElementById('modal'))
  : null


export default About;