import React from 'react';
import {Link } from 'react-router-dom'
const Recipes =(props)=>(
    <div className="container">
        <div className="row">
        {props.recipes.map((recipe)=>(
          <div className="col-md-4" key={recipe.recipe_id }>
            <div className="recipe-box">
                <img src={recipe.image_url} alt={recipe.title} className="img-thumbnail img-fluid recipe-box-img" />
                <div className="recipe-text">
                    <h5 className="recipe-title">
                        {recipe.title.length < 20 ? `${recipe.title}`:`${recipe.title.substring(0,25)}...`}
                    </h5>
                    <p className="recipe-subtitle">By:{recipe.publisher}</p>
                </div>
                <button className="btn recipe-btn">
                <Link to={{
                    pathname:`/recipe-details/${recipe.recipe_id}`,
                    state:{recipe:recipe.title}
                    }}>view recipe</Link>
                </button>
            </div>
          </div>
        ))}
        </div>
    </div>
)
export default Recipes;