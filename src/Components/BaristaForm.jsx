import React, {Component, useState} from "react";
import RecipeChoices from  "./RecipeChoices";
import drinksJson from "./drinks.json"

const BaristaForm=()=>{ //components might be made of a feature and you just return it its like taking multiple html css js features put it all together in one page on main app
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });
      const ingredients={
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    const onNewDrink=()=>{
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            setCheckedTemperature('');
            setCheckedSyrup('');
            setCheckedMilk('');
            setCheckedBlended('');
            
          getNextDrink();

    };
    const [correct_temp, setCheckedTemperature] = useState('');
const [correct_syrup, setCheckedSyrup] = useState('');
const [correct_milk, setCheckedMilk] = useState('');
const [correct_blended, setCheckedBlended] = useState('');

const onCheckAnswer=()=>{
    event.preventDefault();//stops default action of element from happening 
    if(trueRecipe.temp!=inputs['temperature']){
        setCheckedTemperature('wrong');
    }
    else{
        setCheckedTemperature("correct")
    }
    if(trueRecipe.syrup!=inputs['syrup']){
        setCheckedSyrup('wrong');
    }
    else{
        setCheckedSyrup("correct")
    }
    if(trueRecipe.milk!=inputs['milk']){
        setCheckedMilk('wrong');
    }
    else{
        setCheckedMilk("correct")
    }
    if(trueRecipe.blended!=inputs['blended']){
        setCheckedBlended('wrong');
    }
    else{
        setCheckedBlended("correct")
    }
};


  
    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const getNextDrink=()=>{
        let randomDrinkIndex=Math.floor(Math.random()*drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }
    return (<div>
        <h2> Hi, I'd Like to order a :</h2>
        <div className="drink-container">
  <h2 className="mini-header">{currentDrink}</h2>
  <button
    type="new-drink-button"
    className="button newdrink"
    onClick={onNewDrink}
  >
    🔄
  </button>
</div>
<form className="container">
<div className="mini-container"> 
       <h3>Temperature</h3>
       <div id={correct_temp} className="answer-space">
        {inputs["temperature"]}
       </div>

       <RecipeChoices
        handleChange={(e)=>setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
            />
    </div>
    <div className="mini-container">
       <h3>Syrup</h3>
       <div id={correct_syrup} className="answer-space">
        {inputs["syrup"]}
       </div>
<RecipeChoices
  handleChange={(e) => setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))}
  label="syrup"
  choices={ingredients["syrup"]}
  checked={inputs["syrup"]}
/>
</div>


<div className="mini-container">
<h3>Milk</h3>
       <div id={correct_milk} className="answer-space">
        {inputs["milk"]}
       </div>

       <RecipeChoices
        handleChange={(e)=>setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
            />
</div>
<div className="mini-container">
<h3>Blended </h3>
       <div id={correct_blended} className="answer-space">
        {inputs["blended"]}
       </div>

       <RecipeChoices
        handleChange={(e)=>setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
            />
</div>

        
 </form>
<button onClick={onCheckAnswer} className ="button submit" type='submit'>Check Answer </button>
<button onClick={()=>onNewDrink()}  className ="button" type='new-drink-button'>New Drink </button>

</div>////I debugged it and put (e)=> onNewDrink() or ()=>onNewDrink() so it workedbecause before it kept saying infinute render and it might be due to calling setX() inside the body directly
                        //Think problem is you can call onClick={onNewDrink} but not like onClick={onNewDrink()} since they would be a direct call
    );
}
export default BaristaForm;