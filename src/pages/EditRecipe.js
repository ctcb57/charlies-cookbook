import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import crescendoApi from '../api/crescendoApi';
import { Link } from 'react-router-dom';

const EditRecipe = () => {
    let history = useHistory();
    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        setIsLoading(true); 
        crescendoApi.get(`/recipes/${id}`)
            .then((response) => {
                setRecipe(response.data)
                setIsLoading(false)
            })
            .catch((err) => {})
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        crescendoApi.patch(`/recipes/${id}`, recipe)
            .then((response) => {
                alert('Recipe Update');
                history.push(`/details/${id}`);
            })
            .catch((err) => {})
    }

    return (
        <>
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Edit Recipe</span>
                    </h1>
                </div>
            </header>
            <div className="uk-flex uk-flex-between uk-margin-bottom">
                <ul className="uk-breadcrumb uk-margin-remove-bottom">
                    <li>
                        <Link to="/" className="breadcrumb">Home</Link>
                    </li>
                    <li>
                        <Link to={`/details/${id}`} className="breadcrumb">Recipe Details</Link>
                    </li>
                    <li>
                        <span className="breadcrumb">Edit Recipe</span>
                    </li>
                </ul>
            </div>
            <form>
                <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                    <div className="uk-flex uk-flex-between">
                        <div>
                            <h5>Recipe Details</h5>
                        </div>
                    </div>
                    <hr/>
                    <div data-uk-grid>
                        <div className="uk-width-1-3">
                            <label className="uk-form-label uk-margin-remove uk-text-meta breadcrumb" htmlFor="recipe-title">
                                Title
                            </label>
                            <input 
                                id="recipe-title"
                                className="uk-input input-text"
                                type="text"
                                value={recipe.title}
                                onChange={(e) => setRecipe({ ...recipe, title: e.target.value})}
                            />
                        </div>
                        <div className="uk-width-2-3">
                            <label className="uk-form-label uk-margin-remove uk-text-meta breadcrumb" htmlFor="recipe-description">
                                Description
                            </label>
                            <input 
                                id="recipe-description"
                                className="uk-input input-text"
                                type="text"
                                value={recipe.description}
                                onChange={(e) => setRecipe({ ...recipe, description: e.target.value})}
                            />
                        </div>
                    </div>
                    <div data-uk-grid>
                        <div className="uk-width-1-3">
                            <label className="uk-form-label uk-margin-remove uk-text-meta breadcrumb" htmlFor="recipe-servings">
                                Servings
                            </label>
                            <input 
                                id="recipe-servings"
                                className="uk-input input-text"
                                type="number"
                                value={recipe.servings}
                                onChange={(e) => setRecipe({ ...recipe, servings: e.target.value})}
                            />
                        </div>
                        <div className="uk-width-1-3">
                            <label className="uk-form-label uk-margin-remove uk-text-meta breadcrumb" htmlFor="recipe-prep">
                                Prep Time
                            </label>
                            <input 
                                id="recipe-prep"
                                className="uk-input input-text"
                                type="number"
                                value={recipe.prepTime}
                                onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value})}
                            />
                        </div>
                        <div className="uk-width-1-3">
                            <label className="uk-form-label uk-margin-remove uk-text-meta breadcrumb" htmlFor="recipe-cook">
                                Cook Time
                            </label>
                            <input 
                                id="recipe-cook"
                                className="uk-input input-text"
                                type="number"
                                value={recipe.cookTime}
                                onChange={(e) => setRecipe({ ...recipe, cookTime: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <button 
                    type="submit"
                    className="uk-button uk-button-primary uk-width-1-1 button-label"
                    onClick={(e) => handleSubmit(e)}
                >
                    Save Recipe Details
                </button>
            </form>
        </>
        
    )
}

export default EditRecipe;