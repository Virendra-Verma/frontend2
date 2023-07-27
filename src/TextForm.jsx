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

    const handleClear = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }



    const handleOnChange = (event)=>{
        //console.log("on chnage");
        setText(event.target.value);
    }
   

    const[text,setText]=useState('');
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to the Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to the Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary </h2>
            <p>{text.split(" ").length-1} Words and {text.length}Characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        </div>
        </>
        
        
    )
}
