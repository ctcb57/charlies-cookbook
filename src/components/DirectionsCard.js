import React from 'react';

const DirectionsCard = ({recipe}) => {

    return (
        <>
            <div className="uk-card uk-card-default uk-card-small uk-card-body uk-margin">
                <div className="uk-flex uk-flex-between uk-margin-small-bottom">
                    <h3>Directions</h3>
                </div>
                <div>
                    <ul className="uk-list uk-list-divider uk-list-decimal">
                        {recipe.directions.map((item, index) => (
                            <li key={index}>
                                {item.optional ? `${item.instructions} (optional)` : `${item.instructions}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DirectionsCard;