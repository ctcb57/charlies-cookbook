import React from 'react';

const RecipeCard = ({ recipe }) => {

    let imageUrl;
    if (recipe.title === "Queso Brat Scramble") {
        imageUrl = "https://bitbucket.org/crescendocollective/frontend-api-skills-test/raw/11454dd59421035e6ca354507ea21a296f8c9205/public/img/queso_brat_scramble--m.jpg"
    } else if (recipe.title === "Italian Meatballs") {
        imageUrl = "https://bitbucket.org/crescendocollective/frontend-api-skills-test/raw/11454dd59421035e6ca354507ea21a296f8c9205/public/img/italian_meatballs--m.jpg"
    } else if (recipe.title === "Kielbasa Skillet") {
        imageUrl = "https://bitbucket.org/crescendocollective/frontend-api-skills-test/raw/11454dd59421035e6ca354507ea21a296f8c9205/public/img/kielbasa_skillet--m.jpg"
    } else if (recipe.title === "Brussel Chips") {
        imageUrl = "https://bitbucket.org/crescendocollective/frontend-api-skills-test/raw/11454dd59421035e6ca354507ea21a296f8c9205/public/img/brussel_chips--m.jpg"
    } else if (recipe.title === "Pancake Mountain") {
        imageUrl = "https://bitbucket.org/crescendocollective/frontend-api-skills-test/raw/11454dd59421035e6ca354507ea21a296f8c9205/public/img/pancake_mountain--m.jpg"
    }

    let totalCookTime = recipe.prepTime + recipe.cookTime;

    return (
        <>
            <div 
                className="uk-card uk-card-default uk-card-small uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-hover"
                data-uk-grid
            >
                <div className="uk-card-media-left uk-cover-container uk-width-1-5">
                    <img 
                        src={imageUrl}
                        alt={recipe.title}
                        data-uk-cover
                        data-uk-img=""
                    />
                </div>
                <div className="uk-card-body uk-width-3-5">
                    <h3 className="uk-card-title uk-margin-remove">{recipe.title}</h3>
                    <div>
                        <p className="uk-margin-remove">{recipe.description}</p>
                    </div>
                    <div>
                        <p className="uk-margin-remove">Cook Time: {totalCookTime} minutes</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard;