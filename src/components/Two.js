import React, {useEffect,  useState } from "react"
import Effect from "./Effect";
import Flyrocket from "./Flyrocket";
import Reward from "./Reward";
import RewardNext from "./RewardNext";
import WrongEffect from "./WrongEffect";
import './Two.css';
const Two = () => {
 const[qu2, setQu2]=useState(Math.floor(Math.random() * 10) + 1);
 const[first1, setFirst1]=useState('');
    const[second1, setSecond1]=useState('');
    const[status,setstatus]=useState('');
    const[third,setThird]=useState('');
    const [disabled, setDisabled] = useState(false);
    let high2=JSON.parse(localStorage.getItem('high2'));
    let count2=JSON.parse(localStorage.getItem('count2'));
    let score2=JSON.parse(localStorage.getItem('score2'));
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
    let number0=JSON.parse(localStorage.getItem('number0'));
    let number1=JSON.parse(localStorage.getItem('number1'));
    let number2=JSON.parse(localStorage.getItem('number2'));
    let number3=JSON.parse(localStorage.getItem('number3'));
    let number4=JSON.parse(localStorage.getItem('number4'));
    let number5=JSON.parse(localStorage.getItem('number5'));
    let number6=JSON.parse(localStorage.getItem('number6'));
    let number7=JSON.parse(localStorage.getItem('number7'));
    let number8=JSON.parse(localStorage.getItem('number8'));
    let number9=JSON.parse(localStorage.getItem('number9'));
    let number10=JSON.parse(localStorage.getItem('number10'));

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
function deletez(){
    
    localStorage.setItem("number0", JSON.stringify(0)); 
  localStorage.setItem("number1", JSON.stringify(0)); 
   localStorage.setItem("number2", JSON.stringify(0)); 
    localStorage.setItem("number3", JSON.stringify(0));
    localStorage.setItem("number4", JSON.stringify(0)); 
     localStorage.setItem("number5", JSON.stringify(0));
     localStorage.setItem("number6", JSON.stringify(0)); 
   localStorage.setItem("number7", JSON.stringify(0)); 
    localStorage.setItem("number8", JSON.stringify(0));
    localStorage.setItem("number9", JSON.stringify(0)); 
     localStorage.setItem("number10", JSON.stringify(0));
document.getElementById("ans3").innerHTML=null;


}
    
function dragStart (e)  {
  
e.dataTransfer.setData("Text", e.target.id);

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
 function drop3  (e) {
  let theData2 = e.dataTransfer.getData("URL");
  let data3= e.dataTransfer.getData("Text");
  var nodeCopy=document.getElementById(data3).cloneNode(true);

  e.target.appendChild(nodeCopy);
 
  check3(theData2);


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
 function check3(theData){
    if(theData===('http://localhost:3000/0.png')){
     localStorage.setItem("number0", JSON.stringify(0));
    
 }
if(theData===('http://localhost:3000/1.jpg')){
     localStorage.setItem("number1", JSON.stringify(1));
     
 }
  if(theData===('http://localhost:3000/2.png')){
     
    localStorage.setItem("number2", JSON.stringify(2));
 }
   if(theData===('http://localhost:3000/3.png')){
     
     localStorage.setItem("number3", JSON.stringify(3));
 }
   if(theData===('http://localhost:3000/4.jpg')){
    
      localStorage.setItem("number4", JSON.stringify(4));
 }
   if(theData===('http://localhost:3000/5.jpg')){
    
      localStorage.setItem("number5", JSON.stringify(5));
 }
 if(theData===('http://localhost:3000/6.jpg')){
    
      localStorage.setItem("number6", JSON.stringify(6));
 }
 if(theData===('http://localhost:3000/7.jpg')){
    
      localStorage.setItem("number7", JSON.stringify(7));
 }
 if(theData===('http://localhost:3000/8.jpg')){
    
      localStorage.setItem("number8", JSON.stringify(8));
 }
 if(theData===('http://localhost:3000/9.png')){
    
      localStorage.setItem("number9", JSON.stringify(9));
 }
 if(theData===('http://localhost:3000/10.jpg')){
    
      localStorage.setItem("number10", JSON.stringify(10));
 }
 }

function countx()
{
  if (count2 ===null){
    count2=count2+1;
  }
}
function refreshPage2() {
    window.location.reload(false);
 count2= count2+1;
 localStorage.setItem("count2", JSON.stringify(count2)); 
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
     localStorage.setItem("number0", JSON.stringify(0)); 
      localStorage.setItem("number1", JSON.stringify(0)); 
   localStorage.setItem("number2", JSON.stringify(0)); 
    localStorage.setItem("number3", JSON.stringify(0));
    localStorage.setItem("number4", JSON.stringify(0)); 
     localStorage.setItem("number5", JSON.stringify(0));
     localStorage.setItem("number6", JSON.stringify(0)); 
   localStorage.setItem("number7", JSON.stringify(0)); 
    localStorage.setItem("number8", JSON.stringify(0));
    localStorage.setItem("number9", JSON.stringify(0)); 
     localStorage.setItem("number10", JSON.stringify(0));
  }
  function deleteScore2(){
   if (score2 > high2) {
      localStorage.setItem("high2", JSON.stringify(score2)); 
}
    
    localStorage.setItem("score2", JSON.stringify(0));
    localStorage.setItem("count2", JSON.stringify(1));

    score22();
    
    window.location.reload(false);
}

  useEffect(()=>{
      
if(status===('SUCCESS')||(status===('FAIL')))
{
    setTimeout(()=>{
setstatus('');setFirst1('');setSecond1('');setThird('');refreshPage2();
    },5000);
}
 },[status]);
 function sum(){
    setDisabled(true);
   var result =JSON.parse(localStorage.getItem('num0'))+JSON.parse(localStorage.getItem('num1'))+JSON.parse(localStorage.getItem('num2'))+
JSON.parse(localStorage.getItem('num3'))+JSON.parse(localStorage.getItem('num4'))+
JSON.parse(localStorage.getItem('num5'))+JSON.parse(localStorage.getItem('num6'))+
JSON.parse(localStorage.getItem('num7'))+JSON.parse(localStorage.getItem('num8'))+
JSON.parse(localStorage.getItem('num9'))+JSON.parse(localStorage.getItem('num10'))+
JSON.parse(localStorage.getItem('numb0'))+
JSON.parse(localStorage.getItem('numb10'))+JSON.parse(localStorage.getItem('numb9'))+
JSON.parse(localStorage.getItem('numb8'))+JSON.parse(localStorage.getItem('numb7'))+
JSON.parse(localStorage.getItem('numb6'))+JSON.parse(localStorage.getItem('numb5'))
+JSON.parse(localStorage.getItem('numb4'))+JSON.parse(localStorage.getItem('numb3'))+
JSON.parse(localStorage.getItem('numb2'))+JSON.parse(localStorage.getItem('numb1'))+
JSON.parse(localStorage.getItem('number10'))+JSON.parse(localStorage.getItem('number9'))+
JSON.parse(localStorage.getItem('number8'))+JSON.parse(localStorage.getItem('number7'))+
JSON.parse(localStorage.getItem('number6'))+JSON.parse(localStorage.getItem('number5'))
+JSON.parse(localStorage.getItem('number4'))+JSON.parse(localStorage.getItem('number3'))+
JSON.parse(localStorage.getItem('number2'))+JSON.parse(localStorage.getItem('number1'))
+JSON.parse(localStorage.getItem('number0'));
var q=document.getElementById("ques2").value

if(parseInt(result)===parseInt(q)){
   
    setstatus('SUCCESS');
score2=score2+1;
     
localStorage.setItem("score2", JSON.stringify(score2)); 
}
     else 
 
     setstatus('FAIL');
  
 }

 const score22=()=>(
<div className="scorebar2">
    <p className="score">your score:</p>
    <p className="point">{score2}/{count2}</p>
    <p className="prev"> previous high score:</p>
    <p className="ppoint">{high2}</p>
</div>
)  

    return ( <>
    <h1>three-wholepart</h1>
    {/* <div className="question"> */}
        
        <div className="qno">
      {countx()}
     question  {count2}
     </div>
      {/* </div> */}
<input type="text" id="ques2" value={qu2}></input>
<div className="animal"><img src="123.png"/></div>

 <div className="answer1"  id="ans1" onDrop={drop} onDragOver={e=>e.preventDefault()} >
    
  </div> 
   <div>
 <button className="btndelete1"  onClick={deletex}>❌</button>
 </div>
<div className="answer2"  id="ans2" onDrop={drop2} onDragOver={e=>e.preventDefault()}>

 
</div>
<div>
<button className="btndelete2" onClick={deletey}>❌</button>

 </div>
<div className="answer3" id="ans3" onDrop={drop3} onDragOver={e=>e.preventDefault()}>

 
</div>
<div>
<button className="btndelete3" onClick={deletez}>❌</button>

 </div>
<button className="button" disabled={disabled} onClick={sum}>OK</button>
{/* <button onClick={refreshPage2}>Next</button> */}
<button className="end" onClick={deleteScore2} >end game</button>
  {status==='SUCCESS' && <Effect/> }
  {score2=== 5 && <Flyrocket/>}  
 {score2=== 10 && <RewardNext/>} 
{status==='FAIL' && <WrongEffect/>} 

{score22()}

<div className="images">
  <div className="nums0"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
   <img className="i" value="0" src="0.png" alt="" width="40" height="40" id="num0" draggable="true" onDragStart={dragStart} ></img>
    </div> 
 <div className="nums1"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
   <img className="i" value="1" src="1.jpg" alt="" width="40" height="40" id="num1" draggable="true" onDragStart={dragStart} ></img>
    </div> 
 <div className="nums2"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
  <img className="i" value="2" src="2.png" alt="" width="40" height="40" id="num2" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums3"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="3" src="3.png" alt="" width="40" height="40" id="num3" draggable="true" onDragStart={dragStart} ></img>
     </div>
     <div className="nums4"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="4" src="4.jpg" alt="" width="40" height="40" id="num4" draggable="true" onDragStart={dragStart} ></img>
    </div>
     <div className="nums5"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className ="i" value="5" src="5.jpg" alt="" width="40" height="40" id="num5" draggable="true" onDragStart={dragStart} ></img> 
     </div>
     {/* </div> */}
     {/* <div className="images2"> */}
      <div className="nums6"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="6" src="6.jpg" alt="" width="40" height="40" id="num6" draggable="true" onDragStart={dragStart} ></img> 
     </div>  
      <div className="nums7"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="7" src="7.jpg" alt="" width="40" height="40" id="num7" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums8"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="8" src="8.jpg" alt="" width="40" height="40" id="num8" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums9"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="9" src="9.png" alt="" width="40" height="40" id="num9" draggable="true" onDragStart={dragStart} ></img> 
     </div>
      <div className="nums10"  onDrop={drop} onDragOver={e=>e.preventDefault()}> 
    <img className="i" value="10" src="10.jpg" alt="" width="40" height="40" id="num10" draggable="true" onDragStart={dragStart} ></img> 
     </div>
     </div>
    </> );
}
 
export default Two;