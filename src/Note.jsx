import React from 'react';

function Note(props){
    return (
        <div className='Note'>
        <h4  spellCheck="false">{props.title}</h4>
        <p  spellCheck="true"> {props.content}</p>
        </div>
       )
}

export default Note;
