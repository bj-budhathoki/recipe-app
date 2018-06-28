import React from 'react'
const Form =(props)=>(
    <form onSubmit={props.getRecipe} className="text-center">
        <input type="text" name="recipesName" placeholder="Enter the food name"/>
        <button className="btn">Search</button>
    </form>
)
export default Form;

