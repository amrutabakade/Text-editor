import React,{ useState }  from "react";

export default function TextForm(props)
{
    const [text, setext]=useState("enter text");
    const handleUpClick = () =>
    {
        let newtext=text.toUpperCase();
        setext(newtext);
        console.log("done");
    }
    const handleChange = (event) =>
    {
        setext(event.target.value); // allow to add text into textfeild
    }
    const handleLoClick =() =>
    {
     let newtext=text.toLowerCase();
     setext(newtext);
    }
    const handleClearClick=()=>
    {
        let newtext='';
        setext(newtext);
    }
    return(
        <>
        <div className="container" style ={{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleChange} style={{backgroundColor : props.mode==='light'?'white' : 'grey',color: props.mode==='dark'?'white':'black' }}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
        </div>
        <div className="container"style ={{color: props.mode==='dark'?'white':'black' }}>
            <h1>your text summery</h1>
            <p>words are {text.split(" ").length} and {text.length}characters</p>
        </div>
        </>
     );
}