import React,{Component} from 'react';
const API_KEY='855e382370fef79f65bfc9ee7a37eb2a';
class RecipeDetails extends Component{
    state={
        activeRecipe:[]
    }
    componentDidMount= async()=>{
        const recipesName=this.props.location.state.recipe;
        const api_call= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipesName}`);
        const result= await api_call.json();
        this.setState({activeRecipe:result.recipes[0]})
        console.log(this.state.activeRecipe)
    }
   render() {
       console.log(this.props);
       const   recipe   =this.state.activeRecipe;
     return (
       <div className="container">
           {this.state.activeRecipe.length !== 0 &&
            <div className="current-recipe">
                <img src={recipe.image_url} alt={recipe.title}/>
                <h3>{recipe.title}</h3>
                <h4>publisher:<span>{recipe.publisher}</span></h4>
                <p>Website:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
            </div>
           }
       </div>
     )
   }
}
export default RecipeDetails;