import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "./Notes";


function createNote(items){
    return <Note
        title = {items.title}
        content = {items.content}
    />
}

function App(){
    return (
        <div>
            <Header />
            {Notes.map(createNote)}
       
            <Footer />
        </div>
    )
}

export default App;