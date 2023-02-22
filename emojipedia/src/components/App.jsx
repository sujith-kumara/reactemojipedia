import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// 1. create entry component 
// 2. create props to replace the hard coded data 
// 3. a.import the emoji pedia const
// 3.b. map through the emoji pedia array and render entry component

function createEntry(emojiTerm){
    return  <Entry 
    key = {emojiTerm.id}
    emoji= {emojiTerm.emoji}
    name= {emojiTerm.name}
    meaning= {emojiTerm.meaning}
    />

}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
       
        
      </dl>
    </div>
  );
}

export default App;
