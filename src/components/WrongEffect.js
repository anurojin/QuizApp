
import './Effect.css';
import ReactHowler from 'react-howler';
const WrongEffect = () => {
    return ( 
        <>
          <ReactHowler src={'beep.mp3'} playing={true}  /> 
      
          <div className='wr'>wrong </div>  
        
        
         </>
     );
}
 
export default WrongEffect;