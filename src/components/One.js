import React, {useEffect,  useState } from "react";
import Effect from "./Effect";
import './Pages.css';
import Reward from "./Reward";
import RewardNext from "./RewardNext";
import WrongEffect from "./WrongEffect";
import Flip from 'react-reveal/Flip';
import Flyrocket from "./Flyrocket";

const One = () => {
     const[qu, setQu]=useState(Math.floor(Math.random() * 10) + 1);
    //   const[first, setFirst]=useState('');
    // const[second, setSecond]=useState('');
    const[status,setstatus]=useState('');
    const [disabled, setDisabled] = useState(false);
    let high1=JSON.parse(localStorage.getItem('high1'));
    let count1=JSON.parse(localStorage.getItem('count1'));
    let score=JSON.parse(localStorage.getItem('score'));
    let num0=JSON.parse(localStorage.getItem('num0'));
    let num1=JSON.parse(localStorage.getItem('num1'));
    let num2=JSON.parse(localStorage.getItem('num2'));
    let num3=JSON.parse(localStorage.getItem('num3'));
    let num4=JSON.parse(localStorage.getItem('num4'));
    let num5=JSON.parse(localStorage.getItem('num5'));
    let num6=JSON.parse(localStorage.getItem('num6'));
    let num7=JSON.parse(localStorage.getItem('num7'));
    let num8=JSON.parse(localStorage.getItem('num8'));
    let num9=JSON.parse(localStorage.getItem('num9'));
    let num10=JSON.parse(localStorage.getItem('num10'));
    let numb0=JSON.parse(localStorage.getItem('numb0'));
    let numb1=JSON.parse(localStorage.getItem('numb1'));
    let numb2=JSON.parse(localStorage.getItem('numb2'));
    let numb3=JSON.parse(localStorage.getItem('numb3'));
    let numb4=JSON.parse(localStorage.getItem('numb4'));
    let numb5=JSON.parse(localStorage.getItem('numb5'));
    let numb6=JSON.parse(localStorage.getItem('numb6'));
    let numb7=JSON.parse(localStorage.getItem('numb7'));
    let numb8=JSON.parse(localStorage.getItem('numb8'));
    let numb9=JSON.parse(localStorage.getItem('numb9'));
    let numb10=JSON.parse(localStorage.getItem('numb10'));
    





function dragStart (e)  {
  
e.dataTransfer.setData("Text", e.target.id);

 }
 
function deletex(){
  
  localStorage.setItem("num0", JSON.stringify(0));
 localStorage.setItem("num1", JSON.stringify(0)); 
   localStorage.setItem("num2", JSON.stringify(0)); 
    localStorage.setItem("num3", JSON.stringify(0));
    localStorage.setItem("num4", JSON.stringify(0)); 
     localStorage.setItem("num5", JSON.stringify(0));
     localStorage.setItem("num6", JSON.stringify(0)); 
   localStorage.setItem("num7", JSON.stringify(0)); 
    localStorage.setItem("num8", JSON.stringify(0));
    localStorage.setItem("num9", JSON.stringify(0)); 
     localStorage.setItem("num10", JSON.stringify(0));
document.getElementById("ans1").innerHTML=null;


}
function deletey(){
   
    localStorage.setItem("numb0", JSON.stringify(0));
  localStorage.setItem("numb1", JSON.stringify(0)); 
   localStorage.setItem("numb2", JSON.stringify(0)); 
    localStorage.setItem("numb3", JSON.stringify(0));
    localStorage.setItem("numb4", JSON.stringify(0)); 
     localStorage.setItem("numb5", JSON.stringify(0));
     localStorage.setItem("numb6", JSON.stringify(0)); 
   localStorage.setItem("numb7", JSON.stringify(0)); 
    localStorage.setItem("numb8", JSON.stringify(0));
    localStorage.setItem("numb9", JSON.stringify(0)); 
     localStorage.setItem("numb10", JSON.stringify(0));
document.getElementById("ans2").innerHTML=null;


}
function drop  (e) {
  let theData = e.dataTransfer.getData("URL");
  let data= e.dataTransfer.getData("Text");
//   let theDraggedElement = document.getElementById(data);
var nodeCopy=document.getElementById(data).cloneNode(true);
  e.target.appendChild(nodeCopy);
  check(theData);
 

 }

 function drop2  (e) {
   
  let theData2 = e.dataTransfer.getData("URL");
  let data2= e.dataTransfer.getData("Text");
  var nodeCopy=document.getElementById(data2).cloneNode(true);

  e.target.appendChild(nodeCopy);
 
  check2(theData2);


 }
 function check(theData){
   if(theData===('http://localhost:3000/0.png')){
     localStorage.setItem("num0", JSON.stringify(0));
    
 }
if(theData===('http://localhost:3000/1.jpg')){
     localStorage.setItem("num1", JSON.stringify(1));
    
 }
  if(theData===('http://localhost:3000/2.png')){
    
    localStorage.setItem("num2", JSON.stringify(2));
 }
   if(theData===('http://localhost:3000/3.png')){
    
     localStorage.setItem("num3", JSON.stringify(3));
 }
   if(theData===('http://localhost:3000/4.jpg')){
     
      localStorage.setItem("num4", JSON.stringify(4));
 }
   if(theData===('http://localhost:3000/5.jpg')){
     
      localStorage.setItem("num5", JSON.stringify(5));
 }
  if(theData===('http://localhost:3000/6.jpg')){
     
      localStorage.setItem("num6", JSON.stringify(6));
 }
  if(theData===('http://localhost:3000/7.jpg')){
     
      localStorage.setItem("num7", JSON.stringify(7));
 }
  if(theData===('http://localhost:3000/8.jpg')){
     
      localStorage.setItem("num8", JSON.stringify(8));
 }
  if(theData===('http://localhost:3000/9.jpg')){
     
      localStorage.setItem("num9", JSON.stringify(9));
 }
  if(theData===('http://localhost:3000/10.jpg')){
     
      localStorage.setItem("num10", JSON.stringify(10));
 }
 }
 function check2(theData){
   if(theData===('http://localhost:3000/0.png')){
     localStorage.setItem("numb0", JSON.stringify(0));
     
 }
if(theData===('http://localhost:3000/1.jpg')){
     localStorage.setItem("numb1", JSON.stringify(1));
     
 }
  if(theData===('http://localhost:3000/2.png')){
     
    localStorage.setItem("numb2", JSON.stringify(2));
 }
   if(theData===('http://localhost:3000/3.png')){
     
     localStorage.setItem("numb3", JSON.stringify(3));
 }
   if(theData===('http://localhost:3000/4.jpg')){
    
      localStorage.setItem("numb4", JSON.stringify(4));
 }
   if(theData===('http://localhost:3000/5.jpg')){
    
      localStorage.setItem("numb5", JSON.stringify(5));
 }
 if(theData===('http://localhost:3000/6.jpg')){
    
      localStorage.setItem("numb6", JSON.stringify(6));
 }
 if(theData===('http://localhost:3000/7.jpg')){
    
      localStorage.setItem("numb7", JSON.stringify(7));
 }
 if(theData===('http://localhost:3000/8.jpg')){
    
      localStorage.setItem("numb8", JSON.stringify(8));
 }
 if(theData===('http://localhost:3000/9.png')){
    
      localStorage.setItem("numb9", JSON.stringify(9));
 }
 if(theData===('http://localhost:3000/10.jpg')){
    
      localStorage.setItem("numb10", JSON.stringify(10));
 }
 }

function count()
{
  if (count1 ===null){
    count1=count1+1;
  }
}
function sum(){
   setDisabled(true);


var result =JSON.parse(localStorage.getItem('num0'))+JSON.parse(localStorage.getItem('num1'))+
JSON.parse(localStorage.getItem('num2'))+
JSON.parse(localStorage.getItem('num3'))+JSON.parse(localStorage.getItem('num4'))+
JSON.parse(localStorage.getItem('num5'))+JSON.parse(localStorage.getItem('num6'))+
JSON.parse(localStorage.getItem('num7'))+JSON.parse(localStorage.getItem('num8'))+
JSON.parse(localStorage.getItem('num9'))+JSON.parse(localStorage.getItem('num10'))+
JSON.parse(localStorage.getItem('numb10'))+JSON.parse(localStorage.getItem('numb9'))+
JSON.parse(localStorage.getItem('numb8'))+JSON.parse(localStorage.getItem('numb7'))+
JSON.parse(localStorage.getItem('numb6'))+JSON.parse(localStorage.getItem('numb5'))
+JSON.parse(localStorage.getItem('numb4'))+JSON.parse(localStorage.getItem('numb3'))+
JSON.parse(localStorage.getItem('numb2'))+JSON.parse(localStorage.getItem('numb1'))
+JSON.parse(localStorage.getItem('numb0'));
 alert(result)
var q=document.getElementById("ques").value

if((result)===parseInt(q)){
    setstatus('SUCCESS');
    score=score+1;
   
localStorage.setItem("score", JSON.stringify(score)); 
  
}
    
else
   setstatus('FAIL');
   

}

 function refreshPage() {
    window.location.reload(false);
 count1= count1+1;
 localStorage.setItem("count1", JSON.stringify(count1)); 
 localStorage.setItem("num0", JSON.stringify(0));
 localStorage.setItem("num1", JSON.stringify(0)); 
   localStorage.setItem("num2", JSON.stringify(0)); 
    localStorage.setItem("num3", JSON.stringify(0));
    localStorage.setItem("num4", JSON.stringify(0)); 
     localStorage.setItem("num5", JSON.stringify(0));
     localStorage.setItem("num6", JSON.stringify(0)); 
   localStorage.setItem("num7", JSON.stringify(0)); 
    localStorage.setItem("num8", JSON.stringify(0));
    localStorage.setItem("num9", JSON.stringify(0)); 
     localStorage.setItem("num10", JSON.stringify(0));
     localStorage.setItem("numb0", JSON.stringify(0)); 
     localStorage.setItem("numb1", JSON.stringify(0)); 
   localStorage.setItem("numb2", JSON.stringify(0)); 
    localStorage.setItem("numb3", JSON.stringify(0));
    localStorage.setItem("numb4", JSON.stringify(0)); 
     localStorage.setItem("numb5", JSON.stringify(0));
     localStorage.setItem("numb6", JSON.stringify(0)); 
   localStorage.setItem("numb7", JSON.stringify(0)); 
    localStorage.setItem("numb8", JSON.stringify(0));
    localStorage.setItem("numb9", JSON.stringify(0)); 
     localStorage.setItem("numb10", JSON.stringify(0));
     
  }
  function deleteScore(){
   if (score > high1) {
      localStorage.setItem("high1", JSON.stringify(score)); 
}

localStorage.setItem("score", JSON.stringify(0));
score1();
localStorage.setItem("count1", JSON.stringify(1));
localStorage.removeItem('selected');
localStorage.removeItem('selected2');
 window.location.reload(false);
}
  useEffect(()=>{
      
if(status===('SUCCESS')||(status===('FAIL')))
{
    setTimeout(()=>{
setstatus('');refreshPage();
    },5000);
}
 },[status]);




const score1=()=>(

<div  className="scorebar">
    <p className="score" >your score:</p>
    <p className="point">{score}/{count1}</p>
    <p className="prev"> previous high score:</p>
    <p className="ppoint">{high1}</p>
</div>
)  
    return (<>
    <h1>Two-wholepart</h1>
    <div className="qno">
      {count()}
     question {count1}
      </div> 
      <input type="text" id="ques" value={qu}></input>  
    <div className="animal"><img src="123.png"  alt=""/></div>
     {/* <div className="question">  */}


    
  
{/* <div> */}
 <div className="answer1" id="ans1" onDrop={drop} onDragOver={e=>e.preventDefault()} >
  
  </div>
   <div>
 <button className="btndelete1"  onClick={deletex}>❌</button>
 </div>

  {/* <div> */}
<div className="answer2"  id="ans2" onDrop={drop2} onDragOver={e=>e.preventDefault()}>

</div>
<div>
<button className="btndelete2" onClick={deletey}>❌</button>

 </div>
 
  {/* </div>   */}


<button disabled={disabled} className="button" onClick={sum}>OK</button>
{/* <button onClick={refreshPage}>NEXT</button> */}
<button className="end" onClick={deleteScore} >END</button>


 {status==='SUCCESS' && <Effect/>   }
 
   {score=== 5 && <Flyrocket/>}  
 {score=== 10 && <RewardNext/>}   
 
{status==='FAIL' && <WrongEffect/>} 

    
{score1()}

<div className="images">
  <div className="nums0"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
   <img className="i" value="0" src="0.png" alt="" width="45" height="45" id="num0" draggable="true" onDragStart={dragStart} ></img>
    </div> 
 <div className="nums1"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
   <img className="i" value="1" src="1.jpg" alt="" width="45" height="45" id="num1" draggable="true" onDragStart={dragStart} ></img>
    </div> 
 <div className="nums2"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
  <img className="i" value="2" src="2.png" alt="" width="45" height="45" id="num2" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums3"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="3" src="3.png" alt="" width="45" height="45" id="num3" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums4"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="4" src="4.jpg" alt="" width="45" height="45" id="num4" draggable="true" onDragStart={dragStart} ></img>
    </div>
     <div className="nums5"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="5" src="5.jpg" alt="" width="45" height="45" id="num5" draggable="true" onDragStart={dragStart} ></img> 
     </div>
     {/* </div> */}
     {/* <div className="images2"> */}
      <div className="nums6"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="6" src="6.jpg" alt="" width="45" height="45" id="num6" draggable="true" onDragStart={dragStart} ></img> 
     </div>  
      <div className="nums7"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="7" src="7.jpg" alt="" width="45" height="45" id="num7" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums8"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="8" src="8.jpg" alt="" width="45" height="45" id="num8" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums9"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="9" src="9.png" alt="" width="45" height="45" id="num9" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums10"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="10" src="10.jpg" alt="" width="45" height="45" id="num10" draggable="true" onDragStart={dragStart} ></img> 
     </div>
     </div>
    </>  );
}
 
export default One;