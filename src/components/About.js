import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color : 'white',
        backgroundColor:'black'
    })
    const [btn, setbtn] = useState('Enable Dark Mode')
    const toggleStyle=()=>{
        if(myStyle.color ==='white'){
            setMyStyle({
                color : 'black',
                backgroundColor:'white'
            })
            setbtn('Enable Dark Mode')
        }
        else{
            setMyStyle({
                color : 'white',
                backgroundColor:'black'
            })
            setbtn('Enable Light Mode')
        }
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Text Analysis
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"   aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle} >
                <strong>Text Analysis is about parsing texts in order to extract machine-readable facts from them. The purpose of Text Analysis is to create structured data out of free text content. The process can be thought of as slicing and dicing heaps of unstructured, heterogeneous documents into easy-to-manage and interpret data pieces.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
                <strong>Text utils is a free software that provides various functionality related to text.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
                <strong>It is compatible with any device and easy to use.</strong> 
            </div>
            </div>
        </div>
        </div>
        <div className='container my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-info">{btn}</button>
        </div>
</div>
  )
}
