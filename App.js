import { useEffect, useState } from 'react';
import './App.css';
import { addToLS, removeFromLs } from './utilities/storage';

function App() {
  return (
    <div className="App">
    <Persons></Persons>
    </div>
  );
}

// fetching and maping the data
function Persons() {
  const [persons,setPersons]=useState([])
  useEffect(()=>{
    fetch('data.json') //this data.json file in public folder
      .then((response) => response.json())
      .then((data) => setPersons(data))
  },[])
    return(
      <div>
        {persons.map(person=><Handler key={person._id} person={person}></Handler>)}
      </div>
    )
}
// passing paramter in event handler and adding or remove these data from local storage - for more check doc 
const addDataToLS=(id)=>addToLS(id);
const removeDataFromLS=(id)=>removeFromLs(id);
  function Handler(props) {
    const {_id, name, age}=props.person
      return(
        <div className='container'>
          <h2>Name: {name}</h2>
          <h4>Age: {age}</h4>
          <button onClick={()=>addDataToLS(_id)}>Click to add item in local storage</button>
          <button onClick={()=>removeDataFromLS(_id)}>Click to remove item from local storage</button>
        </div>
      )
  }
export default App;
