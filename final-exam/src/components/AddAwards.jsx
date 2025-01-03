import { useState } from 'react';
import './App.css'

function AddAwards() {
    let [Text, setText] = useState("")
    let set = (event)=>{
        let text = event.target.noname.value;

        setText(text);

    }


    return (
    <>

    <div className="container">
    <div class='form-container' id="awardForm">
      <h3>Add/Edit Award</h3>
      <input name="noname" type="text" id="awardTitle" placeholder="Award Title" value="Fitness Champion"  onChange={()=>{set}}/>
      <input type="text" id="awardDescription" placeholder="Award Description" value="Complete 10 workouts." />
      <input type="number" id="awardRequirement" placeholder="Requirements (e.g., 10)" value="10" />
      <button>Submit</button>
      <button className="clear-button">Clear</button>
      </div>
      </div>

      </>
  )
}

export default AddAwards;
