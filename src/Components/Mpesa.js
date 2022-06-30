import React from 'react';
import Footer from './Footer';
import '../styles/Donate.css'
import mpesa from '../Images/mpesa.png';
import equity from '../Images/equity.jpg';
import kcp from '../Images/kcp.jpg';

const Mpesa = () => {
  return (
    <div>
       <h1> Mpesa</h1>
      <div className='payDetails'>
        

      <div className='mpesaDetails'>
        <button>
          <img src={mpesa} alt=''/>
        </button>
      </div>

      <div className='kcpDetails'>
        <button>
          <img src={kcp} alt=''/>
        </button>
      </div>

      <div className='equityDetails'>
        <button>
          <img src={equity} alt=''/>
        </button>
      </div>

  
      </div>
      <Footer />
      
      </div>
  )
}

export default Mpesa