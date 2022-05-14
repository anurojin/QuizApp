
import Confetti from 'react-confetti';
import ReactHowler from 'react-howler';
import './Effect.css';
import React from "react";

const Effect = () => {
let score=JSON.parse(localStorage.getItem('score'));
    return ( 
        <>
         <ReactHowler src={'applause4.mp3'} playing={true}  /> 
         <Confetti height={1150} width={1150} numberOfPieces={80}/ > 
   <div className='right'>💰 </div>
 
    </>
    )
    
    }
export default Effect;