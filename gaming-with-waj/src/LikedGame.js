import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './LikedGame.css';
import { useStateValue } from './StateProvider';
import DeleteIcon from '@material-ui/icons/Delete';

function LikedGame({ image, picture, title, by, id }) {

    const [{ liked }, dispatch] = useStateValue();

    const removeFromLiked = () => {
        dispatch({
            type: "REMOVE_FROM_LIKED",
            id: id,
        });
    }

    return (
        <div className="likedGame">
            <img className="likedGame__thumbnail" src={ image } alt="Game Card" />
            <div className="likedGame__info">
                <Avatar className="likedGame__avatar" src={ picture } alt="" />
            
                <div className="likedGame__text">
                    <h4>{ title }</h4>
                    <h6>by { by }</h6>
                </div>

                <DeleteIcon onClick={removeFromLiked} className="likedGame__removeBtn" />
            </div>
        </div>
    )
}

export default LikedGame
