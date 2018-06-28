import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes-tile'
const API_KEY='855e382370fef79f65bfc9ee7a37eb2a';
class App extends Component {
  state={
    recipes:[]
  }
  getRecipe= async (e)=>{
    e.preventDefault();
    const recipesName=e.target.elements.recipesName.value;
    const api_call= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipesName}&count=15`);
    const result= await api_call.json();
    this.setState({recipes:result.recipes});
    // console.log(this.state.recipes);
  }
  componentDidMount=()=>{
    const json=localStorage.getItem("recipes");
    const recipes=JSON.parse(json);
    this.setState({recipes:recipes});
  }
  componentDidUpdate= async ()=>{
    const recipes=JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }
  render() {
    const{ recipes }=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={recipes}/>
      </div>
    );
  }
}

export default App;
