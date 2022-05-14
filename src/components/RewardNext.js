import React, { Component } from 'react';
import './Trial.css';
import Modal from "react-modal";
import { useState } from "react";
import "./Modal.css";


const RewardNext = () => {
     const [modal, setModal] = useState(false);

  function toggleModal() {
     
    setModal(!modal);
     
  }
  function close(){
   setModal(!modal);
    document.getElementById("closed").style.display='none';
  }
 function dragStart (e)  {
  
e.dataTransfer.setData("Text", e.target.id);

 }
 
function drop  (e) {
   
  let theData = e.dataTransfer.getData("Text");
 
//get the element
let theDraggedElement = document.getElementById(theData);
//add it to the drop element
e.target.appendChild(theDraggedElement);
let imgData = getBase64Image(theDraggedElement);
localStorage.setItem("selected2", imgData);
 
//instruct the browser to allow the drop
e.preventDefault();
}
  

function getBase64Image(img) {
   let canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  let dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function Dragover(e){
    e.preventDefault();
}
    return (<>
    <button id="closed" className="modal-btn" onClick={toggleModal}>GET REWARD</button>
          <Modal
         isOpen={modal}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
      >
        <button className="close"onClick={close}>CLOSE</button>
              <div className="pics">
<div id="place1" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker1.jpg" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic1" />
</div>
<div id="place2" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker2.png" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic2" />
</div>
<div id="place3" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker3.jpg" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic3" />
</div>
<div id="place4" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker4.jpg" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic4" />
</div>
<div id="place5" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker5.jpg" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic5" />
</div>
<div id="place6" onDrop={drop} onDragOver={e=>e.preventDefault()}>
<img src="sticker6.jpg" width="80" height="80" draggable="true" onDragStart={dragStart} id="pic6" />
</div>

<div className="nums"  onDrop={drop} onDragOver={e=>e.preventDefault()}> <p>pick 1 sticker</p>
  <img src={"data:image/png;base64," + localStorage.getItem('selected')}      />
  <img src={"data:image/png;base64," + localStorage.getItem('selected2')}     />
  <p></p>
{/* <span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span> */}
</div>
</div>
</Modal>
    </>  );
}
 
export default RewardNext;