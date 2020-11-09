import React,{Component} from 'react';
import './App.css';
import Search from './components/Search'
import Product from './components/Product'



class App extends Component{
  state ={
    results:[]
  }

  getRecipe = async(e)=>{
    e.preventDefault()
    const recipe = e.target.elements.recipe.value;

    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipe}&app_id=8fa613f2&app_key=aedc7f2e03cf64d4a13da7611b9d008d`);
    const data = await result.json();
    console.log(data.hits);
    this.setState({results:data.hits})
    
  }
  render(){
    return (
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe App</h1>
          </header>
          <Search getRecipe={this.getRecipe}/>
          <br/>
          <Product results={this.state.results}/>
        </div>
    );
    
  }
}


export default App;
