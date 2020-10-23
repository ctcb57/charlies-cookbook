import React, {useState, useEffect} from 'react';
import crescendoApi from '../api/crescendoApi';
import { useHistory } from 'react-router-dom';
import RecipeCard from "../components/RecipeCard";
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        crescendoApi.get('/recipes')
            .then((response) => {
                setRecipes(response.data);
                setIsLoading(false);
            })
            .catch((err) => {});
    }, [])

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.length > 0) {

        }
    }

    console.log(recipes);

    return (
        <>
            <header className="header">
                <div className="header__add-box">
                    <button className="uk-button header__button">Add New</button>
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Charlie's Cookbook</span>
                        <span className="heading-primary--sub">The World's Premier Culinary Guide</span>
                    </h1>
                </div>
            </header>

            <form>
                <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                    <div className="uk-child-width-expand@s" data-uk-grid>
                        <div className="uk-width-5-6">
                            <input 
                                id="search-input"
                                className="uk-input"
                                type="text"
                                placeholder="Search For Recipes"
                            />
                        </div>
                        <div className="uk-width-1-6">
                            <button className="uk-button">
                                search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {recipes.map((recipe, index) => (
                <Link to={`details/${recipe.uuid}`} key={recipe.uuid}>
                    <RecipeCard recipe={recipe} />
                </Link>
                
            ))}
            <footer className="footer">
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="footer__content">
                            <p>&copy; Charlie Clark</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;