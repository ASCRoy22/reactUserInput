import { useState } from 'react'
import BaristaForm from './Components/BaristaForm'
import RecipeChoices from './Components/RecipeChoices'

import './App.css'

function App() {


  return (
    <div>
      <div className="title-container">
        <h1 className="title">On My Grind</h1>
        <p> SP you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm></BaristaForm>
    </div>
  )
}

export default App
