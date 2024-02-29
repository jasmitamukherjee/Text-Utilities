import React,{useState} from 'react'

export default function TextForm(props) {
  

    const handleupClick = ()=>{
        // console.log("Upeer Case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")

    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)

    }

    const handleLowClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
        


    }


    const [text,setText] = useState("")
  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>
            {props.heading} 
        </h3>
      
  
  <div className="mb-3">
    
    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#b4acac':'white',
  color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
  </div>
  <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleupClick}>Convert to Upper Case</button>

  <button disabled={text.length===0} className='btn btn-secondary mx-2 my-2' onClick={handleLowClick}>Convert to Lower Case</button>
 
  <div className="container my-3">
    <h3>
        Your Text Summary
    </h3>
    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>

    </div>
  )
}
