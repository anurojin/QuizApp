import Modal from "react-modal";
 import "./Flyrocket.css";
import { useState } from "react";

const Flyrocket = () => {
    const [modals, setModals] = useState(false);

  function toggleModal() {
     
    setModals(!modals);
     
  }
  function close(){
    setModals(!modals);
    document.getElementById("close").style.display='none';
  }
 
    return (<> 
    <button  id="close" className="modal-btn" onClick={toggleModal}>BLAST OFF<img src="rocket.png" width="30" height="30" alt=""/></button>
          <Modal
         isOpen={modals}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="Rocketmodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={50}
      >
        <button className="close"onClick={close}>CLOSE</button>  
        
        <div className="cloud">
        <img src="cloud.png" width="80" height="80" alt=""></img>&nbsp;&nbsp;
         <img src="cloud.png" width="80" height="80" alt=""></img>
           </div>
        <div className="rocket">
          
        <img src="rocket.png" width="80" height="80" alt=""></img>
       
        </div>
        <div>
             <img className="land" src="land.jpg"  alt=""></img>
        </div>
        </Modal>
        </>
        );
}
 
export default Flyrocket;