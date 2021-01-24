import React from 'react';
import { useStateValue } from "./StateProvider";
import './Liked.css';
import LikedGame from './LikedGame';

function Liked() {
const [{ liked }, dispatch] = useStateValue();

    return (
        <div className="liked">
            {liked?.length === 0 ? (
                <div>
                    <h2 className="liked__title">You currently don't have any liked games</h2>
                    <p>You have no liked games. To like a game please click on the heart next to the name of the game that you like.</p>
                </div>
            ) : (
                <div>
                    <h2 className="liked__title">Your liked games</h2>

                    {liked?.map(item => (
                        <LikedGame
                            id={item.id}
                            image={item.image}
                            picture={item.picture}
                            title={item.title}
                            by={item.by}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Liked
