import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleClearClick = () =>{
        let newText = ""
        setText(newText)
        // props.showAlert("Text cleared","success")
    }
    const handleCopyClick = () =>{
        // Get the text field
        // var copyText = document.getElementById("myBox");

        // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text copied to the clipboard!","success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert("Cleared extra spaces!","success")
    }

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const nOfWords = () =>{
        // console.log(text.slice(-1), text.length)
        if (text.slice(-1) === ' '){
            return text.split(" ").length-1
        }
        if(text.length === 0){
            return 0
        }
        return text.split(" ").length
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#042649':'white', color: props.mode === 'light'?'black':'white'}} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
                <h3>Your Text summary</h3>
                <p> {text.split(/ \s+/).filter((elem) => {return elem.length!== 0}).length} words and {text.length} characters</p>
            </div>
        </>
    )
}
