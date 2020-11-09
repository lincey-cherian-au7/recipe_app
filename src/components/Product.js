import React from 'react'

import {Link} from  'react-router-dom'

function Product(props) {
    return (
        <div className="container">
            <div className="row">
            {props.results.map((ele,index)=>{
                return (
                    <div className="col-md-4" key={index} style={{marginBottom:'2rem'}}>
                        <div className="recipes__box">
                            <img className="recipes__box-img" src={ele.recipe.image} alt='image'/>
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {ele.recipe.label.length < 20 ?
                                    `${ele.recipe.label}`:
                                    `${ele.recipe.label.substring(0,30)}...`}
                                </h5>
                                <p className="recipes__subtitle">Calories :<span>
                                {(Number(ele.recipe.calories)).toFixed(2)}
                                </span></p>
                            </div> 
                            <button className="recipe_buttons"  style={{color:"#ff006b"}}>
                                <Link to={{pathname:`/recipe/${ele.recipe.label}`,state:{recipe:ele.recipe.label}}}>View Recipe</Link>
                                </button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Product;
