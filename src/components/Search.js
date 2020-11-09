import React from 'react'

function Search(props) {
    return (
        <form onSubmit={props.getRecipe} style={{marginBottom:'2rem'}}>
            <input className="form__input" type="text" name="recipe"/>
                <button className="form__button" style={{color:"#ff006b"}} type="submit" onClick={()=>props.getRecipe}>Search</button>
        </form>
    )
}

export default Search
