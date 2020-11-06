import React from 'react'
import {Button } from 'antd';

function Search(props) {
    return (
        <form onSubmit={props.getRecipe}>
            <input type="text" name="recipe"/>
                <Button>Search</Button>
        </form>
    )
}

export default Search
