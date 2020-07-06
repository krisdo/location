import React from "react";
import ReactDOM from "react-dom";
import Map from './Map.jsx';
const About = ({children, onClose, open}) => 
  
  open ?
  ReactDOM.createPortal(
   
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
            borderRadius: '5px',
            background: 'white',
            padding: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          <div id='modal_close' onClick={onClose}>&times;</div>
          <div>Map should be here</div>
        </div> 
  </div>,
  document.getElementById('about-modal'))
  : null


export default About;