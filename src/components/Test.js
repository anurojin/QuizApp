import React, { useState } from "react"; 
import './Test.css';
const Test = () => {

 const[qu, setQu]=useState(Math.floor(Math.random() * 10) + 1);
   let num1=JSON.parse(localStorage.getItem('num1'));
    let num2=JSON.parse(localStorage.getItem('num2'));
     let num3=JSON.parse(localStorage.getItem('num3'));
      let num4=JSON.parse(localStorage.getItem('num4'));
       let num5=JSON.parse(localStorage.getItem('num5'));

    function Dragover(e){
    e.preventDefault();
}
function dragStart (e)  {
  
e.dataTransfer.setData("Text", e.target.id);

 }
 function drop  (e) {
  let theData = e.dataTransfer.getData("URL");
  let data= e.dataTransfer.getData("Text");
  let theDraggedElement = document.getElementById(data);
//add it to the drop element

e.target.appendChild(theDraggedElement);
check(theData);
 


 }
 function drop2  (e) {
  let theData = e.dataTransfer.getData("URL");
  let data2= e.dataTransfer.getData("Text");
  let theDraggedElement = document.getElementById(data2);

e.target.appendChild(theDraggedElement);
 // alert(theData)
 check(theData);


 }
 function check(theData){
if(theData===('http://localhost:3000/1.jpg')){
     localStorage.setItem("num1", JSON.stringify(1));
     alert('1');
 }
  if(theData===('http://localhost:3000/2.png')){
     alert('2')
    localStorage.setItem("num2", JSON.stringify(2));
 }
   if(theData===('http://localhost:3000/3.png')){
     alert('3')
     localStorage.setItem("num3", JSON.stringify(3));
 }
   if(theData===('http://localhost:3000/4.jpg')){
     alert('4')
      localStorage.setItem("num4", JSON.stringify(4));
 }
   if(theData===('http://localhost:3000/5.jpg')){
     alert('5')
      localStorage.setItem("num5", JSON.stringify(5));
 }
 
 
 }
 function sum(){
     var sum=(num1+num2+num3+num4+num5);
 alert((num1));alert((num2)); alert((num3));alert((num4));alert((num5)); alert(sum)
 }
 
    return (  <>
    <div>
        <div className="question">
            <input type="number" value={qu} />
            </div>

<div className="answer1"  onDrop={drop} onDragOver={e=>e.preventDefault()} >
    
  </div>
<div className="answer2" onDrop={drop2} onDragOver={e=>e.preventDefault()}>

 
</div>
</div>
<div className="images">
 <div className="nums1"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
   <img value="1" src="1.jpg" width="80" height="80" id="num1" draggable="true" onDragStart={dragStart} ></img>
    </div> 
 <div className="nums2"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
  <img value="2" src="2.png" width="80" height="80" id="num2" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums3"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img value="3" src="3.png" width="80" height="80" id="num3" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums4"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img value="4" src="4.jpg" width="80" height="80" id="num4" draggable="true" onDragStart={dragStart} ></img>
    </div>
     <div className="nums5"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img value="5" src="5.jpg" width="80" height="80" id="num5" draggable="true" onDragStart={dragStart} ></img> 
     </div>  
     </div>
<button className="ok"onClick={sum}>ok</button>

    </>);
}
 
export default Test;