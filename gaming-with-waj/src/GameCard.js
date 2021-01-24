import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './GameCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStateValue } from "./StateProvider";

function GameCard({ image, title, by, picture, id }) {

    const [{ liked }, dispatch] = useStateValue();

    const addToLiked = () => {
        //add game
        dispatch({
            type: 'ADD_TO_LIKED',
            item:{
                id: id,
                image: image,
                title: title,
                by: by,
                picture: picture
            }
        })
    };

    return (
        <div className="gameCard">
            <img className="gameCard__thumbnail" src={ image } alt="Game Card" />
            <div className="gameCard__info">
                <Avatar className="gameCard__avatar" src={ picture } alt="" />
            
                <div className="gameCard__text">
                    <h4>{ title }</h4>
                    <h6>by { by }</h6>
                </div>

                <FavoriteIcon onClick={addToLiked} className="gameCard__likeBtn"/>
            </div>
        </div>
    )
}

export default GameCard
