import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Notes from './components/Notes';

function App() {
  
  const[titleval,addtitle]=useState("")
function title(event){
addtitle(event.target.value)
}


const[textarea,newtextarea]=useState("")
function area(event){
newtextarea(event.target.value)
}

const[arr,newarr]=useState([])
function click(){
  newarr([...arr,{first:titleval,second:textarea}])
  addtitle("");
  newtextarea("")
  }
  function deletee(id){
newarr(arr.filter((val,index)=>{
  return index!=id
}))}
const[re,newre]=useState("") 
const[chhead,newhead]=useState('')
const[chlower,newlower]=useState('')  
function reverseval(head,lower,id){
  newre(id);
addtitle(head);
newtextarea(lower);  
newhide("block")
newstyle("none")

}
function save(){
 newarr(arr.map((value,index)=>{
  if(index===re){
    return value={first:titleval,second:textarea}
  }
  return value
 }))
 addtitle("")
 newtextarea("")
 newhide("none")
newstyle("block")
}

function cancel(){
 newre()
 newhide("none")
 newstyle("block")
 addtitle("")
 newtextarea("")
 
}
const[style,newstyle]=useState("block")
const[hide,newhide]=useState("none")
console.log(arr)
return (
    < >
      <div className="app" >
      <h1 className='heading'>Make your Notes </h1>
        <div className='container'>
          <input type="text" value={titleval} onChange={title} className='input' placeholder='Title'/>
          <textarea rows="5 " value={textarea} onChange={area} cols="auto" placeholder='Take a note...'></textarea>
          <button className='appbutton' style={{display:style}} onClick={click}>➕</button>
          <button className='save' style={{display:hide}} onClick={save}>save</button>
          <button className='cancel' style={{display:hide}} onClick={cancel}>Cancel</button>
        </div>
       <div className='flex'>
       {
          arr.map((value,index)=>{
            return (
              <div  key={index}>
               <Notes 
               head={value.first} 
               id={index} 
               lower={value.second} 
               reverse={reverseval}
               select={deletee}/>
              </div>
            )
          })
        }
       </div>
        
      </div>
    </>
  );
}

export default App;
