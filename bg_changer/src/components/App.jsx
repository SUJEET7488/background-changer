import { useState } from "react";
import Colors from '../constants/Colors.js';
import '../styles/App.style.css';
import Button from "./Button.jsx";

function App(){
    const[color,setColor]=useState('#ffffff');
   const changeColor=(color)=>{
        setColor(color);
        console.log(color);
   }
return <>
  
         <div className="main"id="main" style={{backgroundColor:color}}>
         <div id="palette" className="flex-column flex-wrap mx-5 text-center fixed inset-x-0 bottom-12 gap-4 w-auto border-2 justify-center border-black p-2 h-32 rounded-xl border-solid">
            <h1 id="title">Color Palette</h1>
            <div id="palette-button" className="flex flex-wrap  gap-4 w-auto border-2 justify-center border-black p-2 rounded-xl bg-green-200 border-solid">
                {Colors.map(({hexValue,colorName},index)=>{
                  return <Button key={'btn'+index} 
                  index={index} 
                  hexValue={hexValue} 
                  colorName={colorName}
                  handleClick={changeColor}
                  />
                })}
            </div>
         </div>
     </div>
    </>
}
export default App;