import React from 'react';
import './Games.css';
import GameCard from './GameCard'
import { Link } from "react-router-dom";

function Games() {
    return (
        <div className="games">
            <h2>Recommended</h2>
            <div className="games__games">
                <GameCard 
                    title="Speed Typing"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01234"
                />
                <GameCard 
                    title="tetris"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01235"
                />
                <GameCard 
                    title="racing"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01234"
                />
                <GameCard 
                    title="game1"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01235"
                />
                <GameCard 
                    title="game2"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01234"
                />
                <GameCard 
                    title="game3"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01235"
                />
                <GameCard 
                    title="game4"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01234"
                />
                <GameCard 
                    title="game5"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01235"
                />
                <GameCard 
                    title="Speed Typing"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01234"
                />
                <GameCard 
                    title="tetris"
                    by="Shriram"
                    image= {require('./images/speedTyping.png')}
                    picture= {require('./images/IMG_2070 (2).JPG')}
                    id="01235"
                />
            </div>
        </div>
    )
}

export default Games
