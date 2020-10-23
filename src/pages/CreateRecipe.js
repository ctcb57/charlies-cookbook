import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import crescendoApi from '../api/crescendoApi';
import AddIngredientModal from '../components/AddIngredientModal';

const CreateRecipe = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [servings, setServings] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [ingredientName, setIngredientName] = useState("")
    const [ingredientAmount, setIngredientAmount] = useState("");
    const [ingredientMeasurement, setIngredientMeasurement] = useState("");
    const [reload, setReload] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleNewIngredient = (e) => {
        e.preventDefault();
        let ingredient = {
            name: ingredientName,
            amount: ingredientAmount,
            measurement: ingredientMeasurement
        }
        let newArray = []
        newArray = ingredients
        newArray.push(ingredient)
        setIngredients(newArray)
        setIngredientName("")
        setIngredientAmount("")
        setIngredientMeasurement("")
    }

    return (
        <>
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Create Recipe</span>
                    </h1>
                </div>
            </header>
            <div className="uk-flex uk-flex-between uk-margin-bottom">
                <ul className="uk-breadcrumb uk-margin-remove-bottom">
                    <li>
                        <Link to="/" className="breadcrumb">Home</Link>
                    </li>
                    <li>
                        <span className="breadcrumb">Create Recipe</span>
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                value={servings}
                                onChange={(e) => setServings(e.target.value)}
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
                                value={prepTime}
                                onChange={(e) => setPrepTime(e.target.value)}
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
                                value={cookTime}
                                onChange={(e) => setCookTime(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                <div className="uk-flex uk-flex-between">
                    <div>
                        <legend className="uk-card-title">
                        Ingredients
                        </legend>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-3 uk-margin-right">
                            <p>Name</p>
                        </div>
                        <div className="uk-inline uk-width-1-4 uk-margin-right">
                            <p>Amount</p>
                        </div>
                        <div className="uk-inline uk-width-1-4 uk-margin-left">
                            <p>Measurement</p>
                        </div>
                    </div>
                </div>
                {ingredients.length ? 
                <div>
                    {ingredients.map((item, index) => (
                        <div className="uk-margin" key={index}>
                            <div className="uk-inline uk-width-1-3 uk-margin-right">
                                <p>{item.name}</p>
                            </div>
                            <div className="uk-inline uk-width-1-4 uk-margin-right">
                                <p>{item.amount}</p>
                            </div>
                            <div className="uk-inline uk-width-1-4 uk-margin-left">
                                <p>{item.measurement}</p>
                            </div>
                        </div>
                    ))}
                </div>
                :
                null
                }
                <hr />
                <div className="uk-margin">
                    <div className="uk-inline uk-width-1-3 uk-margin-right">
                        <label className="uk-form-label">Name</label>
                        <input 
                            className="uk-input"
                            value={ingredientName}
                            onChange={(e) => setIngredientName(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className="uk-inline uk-width-1-4 uk-margin-right">
                        <label className="uk-form-label">Amount</label>
                        <input 
                            className="uk-input"
                            value={ingredientAmount}
                            onChange={(e) => setIngredientAmount(e.target.value)}
                            type="number"
                        />
                    </div>
                    <div className="uk-inline uk-width-1-4 uk-margin-left">
                        <label className="uk-form-label">Measurement</label>
                        <input 
                            className="uk-input"
                            value={ingredientMeasurement}
                            onChange={(e) => setIngredientMeasurement(e.target.value)}
                            type="text"
                        />
                    </div>
                </div>
                <button 
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-top"
                    onClick={(e) => handleNewIngredient(e)}
                >Add Ingredient</button>
            </div>
            <button 
                type="submit"
                className="uk-button uk-button-primary uk-width-1-1 button-label"
                onClick={(e) => handleSubmit(e)}
            >
                Submit Recipe
            </button>

        </>
    )
}

export default CreateRecipe;