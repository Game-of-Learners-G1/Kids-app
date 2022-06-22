import React, { useState } from 'react';
import Footer from './Footer';
import { useSpeechSynthesis } from 'react-speech-kit';

const Readme = () => {
    const [text, setText] = useState('');
    const {speak} = useSpeechSynthesis();

    const handleOnClick = () => {
        speak({text:text})
    }
    return (
        <div>

            <h1>Type your text here and let computer read for you</h1>
            <div>
                <form>
                    <textarea className="typeMe" onChange={(e)=>{setText(e.target.value)}}></textarea>
                    <br/>
                    <button id="btnRead" onClick={()=>{handleOnClick()}}>Read</button>
                </form>

            </div>
        <Footer/>
    </div>
    )
}

export default Readme