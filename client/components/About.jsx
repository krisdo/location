import React from "react";
import ReactDOM from "react-dom";
import Map from './Map.jsx';
// import styled from 'styled-components';

const About = ({city, state, country, lat, lng, onClose, gettingAround, description, open}) => {
  

return (
  
  open ?
  ReactDOM.createPortal(
   
    <div className='overlay' style={{    
    position: 'fixed',
    top: '0',
    background: 'rgba(0,0,0, 0.5)',
    width: '100%',
    height: '100%',
    left: '0',
  }}>
      <div className='content' style={
        { width: '60%',
          borderRadius: '12px',
          background: 'white',
          padding: '20px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
          <div id='modal_close' style={{cursor: 'pointer'}} onClick={onClose}>&times;</div>
          <section className="indent" style={{float: 'left'}}>
            <section style={{float: 'left', width: '50%'}}>
              <h2 style={{marginBottom: '16px'}}>Location</h2>
              <h4 style={{marginBottom: '16px'}}>{city}, {state}, {country}</h4>
              <p style={{marginBottom: '40px'}}>{description}</p>
              {gettingAround !== null ? <h4 style={{marginBottom: '16px'}}>Getting Around</h4> : null}
              <p style={{marginBottom: '40px'}}>{gettingAround !== null ? gettingAround : null}</p>
            </section>
            <section style={{float: 'left', width: '50%'}}>
              <Map id={'map-modal'} style={{width: '100%', height: '500px', borderRadius: '12px'}} lat={lat} lng={lng}/>
            </section>
          </section>
        </div> 
  </div>,
  document.getElementById('about-modal'))
  : null
)
    }
export default About;