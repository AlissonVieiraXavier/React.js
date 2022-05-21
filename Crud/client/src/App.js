import React, { useState } from 'react'; 
import './App.css';

function App() {
  
  const [values,setValues] = useState();

  const handleChangeValues = value => {
   setValues(prevValue => ({
     ...prevValue,
     [value.target.name]:value.target.value,
   }));
  }
  function handleClickButton(){
    console.log(values);
  } 

  return (
    <div className="app_container">
      <h1> loja </h1>
      <input type="text" onChange={handleChangeValues} name="name" placeholder="name"></input>
      <input type="text" onChange={handleChangeValues} name="cost" placeholder="Preço"></input>
      <input type="text" onChange={handleChangeValues} name="category" placeholder="categoria"></input>
      <button onClick={()=> handleClickButton() }> Cadastrar </button>

    </div>
  );
}

export default App;
