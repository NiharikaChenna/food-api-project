
import './App.css';
import Axios from 'axios'
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useEffect, useState } from 'react';


function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [mealtype, setMealType] = useState("")
  const [dietType, setdietType] = useState("")

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&Mealtype=${mealtype}&diettype=${dietType}`
  // function sample(){
  //   console.log("hellooo")
  // }
  useEffect(()=>{
    getReceipeInfo()
 },[])

  const getReceipeInfo = async() =>{
    var result = await Axios.get(url);
    setApiData(result.data.hits)
    console.log(result.data)
  }
  return (
    <div className='container'>
      <div className='bg-container'>
            <h1 className='name'>Food <span>Recipe</span></h1>
            <p className='para'>"A <span>Recipe</span> has no soul, We Bring soul to the <span>Recipe</span>."</p>
            <form className='form-container'>
              <input type="text" placeholder='enter food' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/>
            <select className='select-meal' onChange={(e) =>setMealType(e.target.value)}>
              <option >meal type</option>
              <option >breakfast</option>
              <option>lunch</option>
              <option>snack</option>
              <option>dinner</option>
           </select>
           <select className='select-diet' onChange={(e) =>setdietType(e.target.value)}>
              <option >diet type</option>
              <option >balanced</option>
              <option>high protien</option>
              <option>high fiber</option>
              <option>low fat</option>
              <option>low carb</option>
              <option>low sodium</option>
           </select>
              {/* <input type="text" placeholder='enter food type' className='search_field' onChange={(e) => {setFoodType(e.target.value)}}/> */}
              <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
            </form>
            </div>
      <div className='card-container'>
          {apiData.map(val => {
             return <Card image ={val.recipe.image} label={val.recipe.label} weight={val.recipe.totalWeight} source={val.recipe.source}/> }
          )}
      </div>
    </div>
  );
}

export default App;
