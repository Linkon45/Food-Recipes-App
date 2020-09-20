import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={image}></img>
                </div>

                <div className="card-back">
                    <h1>Calories: {parseInt(calories, 10)}</h1>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>

                </div>


            </div>

        </div>

        // <div className={style.recipe}>
        //     <h1>{title}</h1>
        //     <img src={image} className={style.image}></img>
        //     <p><strong>Calories: {parseInt(calories, 10)}</strong></p>
        //     <ul>
        //         {ingredients.map(ingredient => (
        //             <li>{ingredient.text}</li>

        //         ))}

        //     </ul>

        // </div>
    );
}

export default Recipe;