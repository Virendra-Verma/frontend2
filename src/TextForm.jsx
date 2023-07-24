import React,{useState} from 'react'



export default function TextForm (props){
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
       // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        //console.log("on chnage");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to the Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to the Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary </h2>
            <p>{text.split(" ").length-1} Words and {text.length}Characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
        
    )
}