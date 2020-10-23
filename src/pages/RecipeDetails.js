import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import crescendoApi from '../api/crescendoApi';
import IngredientCard from '../components/IngredientCard';
import DirectionsCard from '../components/DirectionsCard';


const RecipeDetails = () => {
    let { id } = useParams();

    const [recipe, setRecipe] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let matchingRecipe;
        let specials;
        crescendoApi.get(`recipes/${id}`)
            .then((response) => {
                matchingRecipe = response.data;
                crescendoApi.get('specials/')
                    .then((response) => {
                        specials = response.data;
                        var result = specials.filter(o1 => matchingRecipe.ingredients.some(o2 => o1.ingredientId === o2.uuid));
                        var newIngredientArray = []
                        for (let i = 0; i < matchingRecipe.ingredients.length; i++){
                            for (let j = 0; j < result.length; j++ ) {
                                if (matchingRecipe.ingredients[i].uuid === result[j].ingredientId){
                                    matchingRecipe.ingredients[i].special = result[j];
                                    newIngredientArray.push(matchingRecipe.ingredients[i])
                                    break;
                                } else if (j === result.length - 1) {
                                    newIngredientArray.push(matchingRecipe.ingredients[i])
                                }
                            }
                        }
                        matchingRecipe.ingredients = newIngredientArray
                        setRecipe(matchingRecipe)
                        setIsLoading(false)
                    })  
                    .catch((err) => {}) 
            })
            .catch((err) => {})
    }, [id, refresh])

    const handleEditClick = () => {

    }

    return (
        <>
            <header className="header">
                <div className="header__add-box">
                    <Link to={`/details/${id}/edit`}>
                        <button className="uk-button header__button" onClick={handleEditClick}>Edit Recipe</button>
                    </Link>
                </div>
                
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">{recipe.title}</span>
                        <span className="heading-primary--sub">{recipe.description}</span>
                    </h1>
                </div>
            </header>

            <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                <div className="uk-flex uk-flex-between uk-margin-small-bottom">
                    <h3>Details</h3>
                </div>
                <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                    <div>
                        <h5>Original Post: {recipe.postDate}</h5>
                    </div>
                    <div>
                        <h5>Last Updated: {recipe.editDate}</h5>
                    </div>
                </div>
                <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                    <div>
                        <h5>Servings: {recipe.servings}</h5>
                    </div>
                    <div>
                        <h5>Prep Time: {recipe.prepTime} minutes</h5>
                    </div>
                    <div>
                        <h5>Cook Time: {recipe.cookTime} minutes</h5>
                    </div>
                    <div>
                        <h5>Total Time: {recipe.prepTime + recipe.cookTime} minutes</h5>
                    </div>
                </div>
            </div>
            {
            recipe.title ?
            <IngredientCard recipe={recipe}/>
            :
            null
            }
            {
            recipe.title ?
            <DirectionsCard recipe={recipe} />
            :
            null
            }
        </>
    )
}

export default RecipeDetails;