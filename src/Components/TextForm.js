import React ,{useState} from "react"; // import useState hook from react
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked :" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "success")
    }

    const  handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercasecase" , "success")
    }

    const handleCapClick = () => {
        let newText = text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(newText);
        props.showAlert("Converted to CapitalCase" , "success")
        
    }

    const handleAltCaseClick = () => {
        let newText = text
            .split("")
            .map((char, index) => 
                index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
            )
            .join("");
        setText(newText);
        props.showAlert("Converted to AlternateCase" , "success")
    }

    const handleCopy =() =>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" , "success")
    }

    const  handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("text cleared" , "success")
    }

    const handleOnChange= (event)=>{
      //  console.log("On Change");
        setText(event.target.value)
        
    }
  const [text ,setText] =useState("")
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading} </h1> 
        
          <div className="mb-3" >
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange}  
            style={{backgroundColor: props.mode ==='dark'?'grey':'white' , color: props.mode ==='dark'? 'white':'#042743'} } id="myBox" rows="8"></textarea>
          </div>          
          <button  className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>

          <button  className="btn btn-primary  mx-1" onClick={handleLowClick}>
            Convert to lowercase
          </button>

          <button  className="btn btn-primary  mx-1" onClick={handleCapClick}>
            Capital Case
          </button>

          <button  className="btn btn-primary  mx-1" onClick={handleAltCaseClick}>
            Alternate Case
          </button>

          <button  className="btn btn-primary  mx-1" onClick={handleClearClick}>
            Clear
          </button>

          <button  className="btn btn-primary  mx-1" onClick={handleCopy}>
            Copy
          </button>
       
      </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        {/* <p> {text.split(" ").length} words and {text.length} characters </p> */}
        <p> {text.length} characters </p>
        <p> Time taken to read the words :{0.008*text.split(" ").length} </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox to preview!!"}</p>
    </div>

    </>
  );
}

//TextForm.propTypes ={heading:PropTypes.string}