import { useState } from 'react';
import './App.css'

function AddAwards() {
    let [Text, setText] = useState("")
    return (
    <>

      <h3>Add/Edit Award</h3>
      <input type="text" id="awardTitle" placeholder="Award Title" value="Fitness Champion"  onChange={()=>{setText}}/>
      <input type="text" id="awardDescription" placeholder="Award Description" value="Complete 10 workouts." />
      <input type="number" id="awardRequirement" placeholder="Requirements (e.g., 10)" value="10" />
      <button>Submit</button>
      <button className="clear-button">Clear</button>
      
      </>
  )
}

export default AddAwards;
