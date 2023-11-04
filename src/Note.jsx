import React from 'react';

function Note(){
    return (
        <div className='Note'>
        <h4 contentEditable="true" spellCheck="false">Note Title</h4>
        <p contentEditable="true" spellCheck="true"> This is a Note Content</p>
        </div>
       )
}

export default Note;
