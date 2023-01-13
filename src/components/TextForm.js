import React,{useState} from 'react'

export default function TextForm(props) {
  function vowels(text){
    const count=text.match(/[aeiouAEIOU]/gi);
    if(count===null) return 0;
    else return count.length;
  }
  function consonants(text){
    if(text.length===0) return 0;
    let cnt=0;
    cnt=Number.parseInt(cnt);
    for(let a of text){
      if(a===' ') continue;
      if(a!=='a' || a!=='i' || a!=='e' || a!=='o' || a!=='u') cnt++;
    }
    return cnt;
  }
  function countWords(text){
    let wc = text.split(" ").length;
    text.split(" ").forEach((word) => {
        if(!word.length){
            wc -= 1;  
        }
    });

    return wc;
}
  const handleUpClick=()=>{
    console.log("Upper case was clicked");
    let a=text.toUpperCase();
    setText(a);
    props.showAlert("Converted to Upper Case","Success");
  }
  const handleLoClick=()=>{
    console.log("Lower case was clicked");
    let a=text.toLowerCase();
    setText(a);
    props.showAlert("Converted to Lower Case","Success");
  }

  const handleClearClick=()=>{
    let a='';
    setText(a);
    props.showAlert("Cleared","Success");
  }
  const handleOnChange=(event)=>{
    console.log('value entered')
    setText(event.target.value);
  }
  const speak=()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text= text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaked","Success");
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("File Downloaded!","Success");
  }
  const handlespaces =()=>{
    let newtext = text.replace(/\s+/g, ' ').trim();
    setText(newtext);
    props.showAlert("Space Removed!","Success");
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
    <textarea className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(4 50 50)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"> </textarea>
  </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
    <button className='btn btn-primary mx-1 my-1' onClick={downloadTxtFile}>Download Text</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handlespaces}>Space Removed</button>
    </div>
    <div className="container mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{countWords(text)} words and {text.length} characters</p>
      <p> {0.008 * countWords(text)} Minutes to read</p>
      <p>Number of vowels are: {vowels(text)}</p>
      <p>Number of consonants are: {consonants(text)}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
