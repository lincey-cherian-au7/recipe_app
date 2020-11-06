import React,{Component} from 'react';
import './App.css';
import Search from './components/Search'


class App extends Component{
  getRecipe =(e)=>{
    const recipe = e.target.elements.recipe.value;
    e.preventDefault()
    console.log(recipe)
  }
  render(){
    return (
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe App</h1>
          </header>
          <Search getRecipe={this.getRecipe}/>
        </div>
    );
    
  }
}


export default App;
