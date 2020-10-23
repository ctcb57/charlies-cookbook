import React from 'react';

const IngredientCard = ({ recipe }) => {

    return (
        <>
            <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                <div className="uk-flex uk-flex-between uk-margin-small-bottom">
                    <h3>Ingredients</h3>
                </div>
                <div>
                    <ul className="uk-grid-small uk-child-width-1-2 uk-child-width-1-2@s" uk-sortable="handle: .uk-card" data-uk-grid>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} uk-tooltip="You can drag me">
                                <div className="uk-card uk-card-default uk-card-small uk-card-body uk-card-hover card-height-fixed">
                                    <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                                        <div>
                                            <h5>{item.name}</h5>
                                        </div>
                                        <div>
                                            <p>{item.amount} {item.measurement}</p>
                                        </div>
                                    </div>
                                    {item.special ?
                                    <div className="uk-child-width-1-1 uk-child-width-expand@s" data-uk-grid>
                                        <div>
                                            <p>{item.special.title}</p>
                                        </div>
                                        <div>
                                            <p>{item.special.type}</p>
                                        </div>
                                        <div>
                                            <p>{item.special.text}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default IngredientCard;