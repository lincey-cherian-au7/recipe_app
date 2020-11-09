import React from 'react';
import {Link} from 'react-router-dom';

class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }
    componentDidMount=async()=>{
        const title = this.props.location.state.recipe;
        const result = await fetch(`https://secret-ocean-49799.herokuapp.com/https://api.edamam.com/search?q=${title}&app_id=8fa613f2&app_key=aedc7f2e03cf64d4a13da7611b9d008d`);
        const data = await result.json();
        console.log(data.hits[0].recipe);
        this.setState({activeRecipe:data.hits[0].recipe})
    }
    render(){
        const recipe = this.state.activeRecipe
        return(
            <>
            <br/>
            <div className="container">
                {
                    this.state.activeRecipe.length !==0 &&
                    <div className="active-recipe">
                    <img className="active-recipe__img" 
                        src={recipe.image}
                        alt={recipe.label}></img>
                        <h3 className="active-recipe__title">{recipe.label}</h3>
                        <h4 className="active-recipe__publisher">Calories : {recipe.calories}</h4>
                        <p className="active-recipe__website">Website : <span><a href={recipe.url}>{recipe.url}</a></span></p>
                        <div className="active-recipe__title">
                        <button className="active-recipe__button">
                            <Link to='/'>Home</Link></button>
                        </div>
                </div>
                }

            </div>
            </>
        )
    }
}

export default Recipe
