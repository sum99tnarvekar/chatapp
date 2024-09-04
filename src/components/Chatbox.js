import React from 'react';

export default function Chatbox(){
    return(
        <div style={{margin: '30px'}}>
            <div style={{textAlign: '-webkit-right'}}>
                <div className="w-fit bg-white text-black p-4 rounded-lg shadow-md m-3">Hi</div>
            </div>
            <div>
                <div className="w-fit bg-white text-black p-4 rounded-lg shadow-md m-3">Hello; How are you?</div>
            </div>
            <div style={{textAlign: '-webkit-right'}}>
                <div className="w-fit bg-white text-black p-4 rounded-lg shadow-md m-3">I'm fine. What about you?</div>
            </div>
            <div>
                <div className="w-fit bg-white text-black p-4 rounded-lg shadow-md m-3">I'm good.</div>
            </div>
        </div>
    )
}