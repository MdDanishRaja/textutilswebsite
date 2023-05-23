import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'rgb(36 74 104)':'#0432743'
    }
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}} >
        <h1 className='my-3'>About Us</h1>
     <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Textutils gives you to analyze your text quickely and efficently. Be it word count, character count or
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Textutiles is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and charecters. Thus it is suitable for writing text with word/ charecter limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compitable</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera. It suits to count charcters in facebook, blog, books, excel document, essays, etc.
            </div>
        </div>
    </div>
</div>
</div>
  )
}
