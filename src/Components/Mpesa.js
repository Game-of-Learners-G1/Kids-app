import React from 'react';
import Footer from './Footer';
import '../styles/Donate.css';

//importing the images
import mpesa from '../Images/mpesa.png';
import equity from '../Images/equity.jpg';
import kcp from '../Images/kcp.jpg';

const Mpesa = () => {
  const handlePaymentDetails = (even) => {
    even.preventDefault()
    alert("We thank you for your generosity. The system has technical problems. Try again in the next few days.")
  }
  return (
    <div>
      <div className = 'paymentHeader'>
        <h1>Choose your payment Method</h1>
      </div>
      
      <div className='payDetails'>
        

      <div className='mpesaDetails'>
        <button onClick={(even) =>handlePaymentDetails(even)}>
          <img src={mpesa} alt=''/>
        </button>
      </div>

      <div className='kcpDetails'>
        <button onClick={(even) =>handlePaymentDetails(even)}>
          <img src={kcp} alt=''/>
        </button>
      </div>

      <div className='equityDetails'>
        <button onClick={(even) =>handlePaymentDetails(even)}>
          <img src={equity} alt=''/>
        </button>
      </div>

  
      </div>
      <Footer />
      
      </div>
  )
}

export default Mpesa