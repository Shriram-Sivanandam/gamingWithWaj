import React from 'react';
import ReactDOM from 'react-dom';
// import ChartistGraph from 'react-chartist';

class Home extends React.Component {
    render() {
        const levels = {
            easy: 5,
            medium: 3,
            hard: 2,
        };
        
        const easyWords = [
            'bye',
            'the',
            'there',
            'hi',
            'hello',
            'here',
            'fan',
            'three',
            'jack',
            'pen',
            'man',
            'boy',
            'math',
            'sir',
            'straw',
            'nine',
            'plug',
            'stack',
            'radio',
            'scale',
            'mug',
            'bank',
            'blue',
            'game',
            'over',
            'tall',
            'ball',
            'yell',
            'tom',
            'horse',
            'mom',
            'exit'
        ];
        
        const mediumWords = [
            'uninterested',
            'hyperbole',
            'javascript',
            'intermittent',
            'unconscious',
            'python',
            'interview',
            'developer',
            'wordpress',
            'office',
            'festival',
            'highlighter',
            'programming',
            'coding',
            'error',
            'snowmobile',
            'dumbledore',
            'bluetooth',
            'pineapple',
            'nintendo',
            'phineas',
            'suddenly',
            'moisturiser',
            'accupuncture',
            'massage',
            'bananas',
            'surgery',
            'haircut',
            'bedsheet',
            'palindrome',
            'exaggeration',
            'intelectual',
            'maurtius',
            'personification',
            'speaker',
            'maleficient',
            'pedestrian',
            'optical',
            'calculator',
            'international'
        ];
        
        const hardWords = [
            'insignificant',
            'contemplating',
            'acetylcholine',
            'plasmodesmata',
            'constellation',
            'communication',
            'photosynthesis',
            'responsibility',
            'representative',
            'conjunctivitis',
            'groundbreaking',
            'acknowledgement',
            'prognostication',
            'parthenogenesis',
            'misapprehension',
            'procrastination'
        ];
        
        let currentLevel = levels.easy;
        let currentWords = easyWords;
        let time = currentLevel;
        let score = 0;
        let isPlaying;
        
        const wordInput = document.querySelector('#word-input');
        const currentWord = document.querySelector('#current-word');
        const scoreDisplay = document.querySelector('#score');
        const timeDisplay = document.querySelector('#time');
        const message = document.querySelector('#message');
        const seconds = document.querySelector('#seconds'); 
        const startbtn = document.querySelector('#start');
        
        function startGame() {
            init();
            wordInput.focus();
        }
        
        function init() {
            startbtn.disabled = true;
            seconds.innerHTML = currentLevel;
            showWord(currentWords);
            wordInput.addEventListener('input', startMatch)
            setInterval(countdown, 1000);
            setInterval(checkStatus, 50); // Check game status
        }
        
        function difficultyChange(diffi) {
            if(diffi.value === 'easy') {
                currentLevel = levels.easy;
            } else if(diffi.value === 'medium') {
                currentLevel = levels.medium;
            } else if(diffi.value === 'hard') {
                currentLevel = levels.hard;
            }
            seconds.innerHTML = currentLevel;
            wordInput.focus();
        }
        
        function wordChange(diff) {
            if(diff.value === 'easy') {
                currentWords = easyWords;
            } else if(diff.value === 'medium') {
                currentWords = mediumWords;
            } else if(diff.value === 'hard') {
                currentWords = hardWords;
            }
            wordInput.focus();
        }
        
        function showWord(currentWords) {
            const randIndex = Math.floor(Math.random() * currentWords.length);
            currentWord.innerHTML = currentWords[randIndex];
        }
        
        function startMatch() {
            if(matchWords()) {
                isPlaying = true;
                time = currentLevel + 1;
                showWord(currentWords);
                wordInput.value = '';
                score++;
            }
            if(score === -1) {
                scoreDisplay.innerHTML = 0;
            } else {
                scoreDisplay.innerHTML = score;
            }
        }
        
        function matchWords() {
            if(wordInput.value === currentWord.innerHTML) {
                message.innerHTML = 'Correct!!!';
                message.style.color = 'green';
                wordInput.style.borderStyle = 'none';
                return true;
            } else {
                message.innerHTML = '';
                return false;
            }
        }
        
        function countdown() {
            //make sure time has not run out
            if(time > 0) {
                time--;
            } else if (time === 0) {
                isPlaying = false;
            }
        
            timeDisplay.innerHTML = time;
        }
        
        function checkStatus() {
            if(!isPlaying && time === 0) {
                message.style.color = 'red';
                message.innerHTML = 'Game Over!!! Type the above word to restart and play again';
                score = -1;
                wordInput.style.borderColor = 'red';
                wordInput.style.borderStyle = 'solid';
                wordInput.style.borderWidth = "thick";
            }
        }

        return (
            <div>

            </div>
        )
    }
}

ReactDOM.render(<Home />, document.body);

export default Home;

//export { checkStatus, countdown, matchWords, startGame, startMatch, showWord, wordChange, startGame, init, difficultyChange };





// import React from 'react';
// import'bootstrap/dist/css/bootstrap.min.css';
// import './Typing.css';

// const levels = {
//     easy: 5,
//     medium: 3,
//     hard: 2,
// };

// const easyWords = [
//     'bye',
//     'the',
//     'there',
//     'hi',
//     'hello',
//     'here',
//     'fan',
//     'three',
//     'jack',
//     'pen',
//     'man',
//     'boy',
//     'math',
//     'sir',
//     'straw',
//     'nine',
//     'plug',
//     'stack',
//     'radio',
//     'scale',
//     'mug',
//     'bank',
//     'blue',
//     'game',
//     'over',
//     'tall',
//     'ball',
//     'yell',
//     'tom',
//     'horse',
//     'mom',
//     'exit'
// ];

// const mediumWords = [
//     'uninterested',
//     'hyperbole',
//     'javascript',
//     'intermittent',
//     'unconscious',
//     'python',
//     'interview',
//     'developer',
//     'wordpress',
//     'office',
//     'festival',
//     'highlighter',
//     'programming',
//     'coding',
//     'error',
//     'snowmobile',
//     'dumbledore',
//     'bluetooth',
//     'pineapple',
//     'nintendo',
//     'phineas',
//     'suddenly',
//     'moisturiser',
//     'accupuncture',
//     'massage',
//     'bananas',
//     'surgery',
//     'haircut',
//     'bedsheet',
//     'palindrome',
//     'exaggeration',
//     'intelectual',
//     'maurtius',
//     'personification',
//     'speaker',
//     'maleficient',
//     'pedestrian',
//     'optical',
//     'calculator',
//     'international'
// ];

// const hardWords = [
//     'insignificant',
//     'contemplating',
//     'acetylcholine',
//     'plasmodesmata',
//     'constellation',
//     'communication',
//     'photosynthesis',
//     'responsibility',
//     'representative',
//     'conjunctivitis',
//     'groundbreaking',
//     'acknowledgement',
//     'prognostication',
//     'parthenogenesis',
//     'misapprehension',
//     'procrastination'
// ];

// let currentLevel = levels.easy;
// let currentWords = easyWords;
// let time = currentLevel;
// let score = 0;
// let isPlaying;

// const wordInput = document.querySelector('#word-input');
// const currentWord = document.querySelector('#current-word');
// const scoreDisplay = document.querySelector('#score');
// const timeDisplay = document.querySelector('#time');
// const message = document.querySelector('#message');
// const seconds = document.querySelector('#seconds'); 
// const startbtn = document.querySelector('#start');

// // function startGame() {
// //     init();
// //     wordInput.focus();
// // }

// // function init() {
// //     startbtn.disabled = true;
// //     seconds.innerHTML = currentLevel;
// //     showWord(currentWords);
// //     wordInput.addEventListener('input', startMatch)
// //     setInterval(countdown, 1000);
// //     setInterval(checkStatus, 50); // Check game status
// // }

// // function difficultyChange(diffi) {
// //     if(diffi.value === 'easy') {
// //         currentLevel = levels.easy;
// //     } else if(diffi.value === 'medium') {
// //         currentLevel = levels.medium;
// //     } else if(diffi.value === 'hard') {
// //         currentLevel = levels.hard;
// //     }
// //     seconds.innerHTML = currentLevel;
// //     wordInput.focus();
// // }

// // function wordChange(diff) {
// //     if(diff.value === 'easy') {
// //         currentWords = easyWords;
// //     } else if(diff.value === 'medium') {
// //         currentWords = mediumWords;
// //     } else if(diff.value === 'hard') {
// //         currentWords = hardWords;
// //     }
// //     wordInput.focus();
// // }

// // function showWord(currentWords) {
// //     const randIndex = Math.floor(Math.random() * currentWords.length);
// //     currentWord.innerHTML = currentWords[randIndex];
// // }

// // function startMatch() {
// //     if(matchWords()) {
// //         isPlaying = true;
// //         time = currentLevel + 1;
// //         showWord(currentWords);
// //         wordInput.value = '';
// //         score++;
// //     }
// //     if(score === -1) {
// //         scoreDisplay.innerHTML = 0;
// //     } else {
// //         scoreDisplay.innerHTML = score;
// //     }
// // }

// // function matchWords() {
// //     if(wordInput.value === currentWord.innerHTML) {
// //         message.innerHTML = 'Correct!!!';
// //         message.style.color = 'green';
// //         wordInput.style.borderStyle = 'none';
// //         return true;
// //     } else {
// //         message.innerHTML = '';
// //         return false;
// //     }
// // }

// // function countdown() {
// //     //make sure time has not run out
// //     if(time > 0) {
// //         time--;
// //     } else if (time === 0) {
// //         isPlaying = false;
// //     }

// //     timeDisplay.innerHTML = time;
// // }

// // function checkStatus() {
// //     if(!isPlaying && time === 0) {
// //         message.style.color = 'red';
// //         message.innerHTML = 'Game Over!!! Type the above word to restart and play again';
// //         score = -1;
// //         wordInput.style.borderColor = 'red';
// //         wordInput.style.borderStyle = 'solid';
// //         wordInput.style.borderWidth = "thick";
// //     }
// // }

// function Typing() {
//     function startGame() {
//         init();
//         wordInput.focus();
//     }
    
//     function init() {
//         startbtn.disabled = true;
//         seconds.innerHTML = currentLevel;
//         showWord(currentWords);
//         wordInput.addEventListener('input', startMatch)
//         setInterval(countdown, 1000);
//         setInterval(checkStatus, 50); // Check game status
//     }
    
//     function difficultyChange(diffi) {
//         if(diffi.value === 'easy') {
//             currentLevel = levels.easy;
//         } else if(diffi.value === 'medium') {
//             currentLevel = levels.medium;
//         } else if(diffi.value === 'hard') {
//             currentLevel = levels.hard;
//         }
//         seconds.innerHTML = currentLevel;
//         wordInput.focus();
//     }
    
//     function wordChange(diff) {
//         if(diff.value === 'easy') {
//             currentWords = easyWords;
//         } else if(diff.value === 'medium') {
//             currentWords = mediumWords;
//         } else if(diff.value === 'hard') {
//             currentWords = hardWords;
//         }
//         wordInput.focus();
//     }
    
//     function showWord(currentWords) {
//         const randIndex = Math.floor(Math.random() * currentWords.length);
//         currentWord.innerHTML = currentWords[randIndex];
//     }
    
//     function startMatch() {
//         if(matchWords()) {
//             isPlaying = true;
//             time = currentLevel + 1;
//             showWord(currentWords);
//             wordInput.value = '';
//             score++;
//         }
//         if(score === -1) {
//             scoreDisplay.innerHTML = 0;
//         } else {
//             scoreDisplay.innerHTML = score;
//         }
//     }
    
//     function matchWords() {
//         if(wordInput.value === currentWord.innerHTML) {
//             message.innerHTML = 'Correct!!!';
//             message.style.color = 'green';
//             wordInput.style.borderStyle = 'none';
//             return true;
//         } else {
//             message.innerHTML = '';
//             return false;
//         }
//     }
    
//     function countdown() {
//         //make sure time has not run out
//         if(time > 0) {
//             time--;
//         } else if (time === 0) {
//             isPlaying = false;
//         }
    
//         timeDisplay.innerHTML = time;
//     }
    
//     function checkStatus() {
//         if(!isPlaying && time === 0) {
//             message.style.color = 'red';
//             message.innerHTML = 'Game Over!!! Type the above word to restart and play again';
//             score = -1;
//             wordInput.style.borderColor = 'red';
//             wordInput.style.borderStyle = 'solid';
//             wordInput.style.borderWidth = "thick";
//         }
//     }
//     return (
//         <div className="typing">
//             <header id="header">
//                 <h1>Speed Typing</h1>
//             </header>

//             <div className="container text-center">
//                 <div className="row">
//                     <div className="col-md-6 mx-auto"> 
//                         <p className="lead">Try your best to type the given word within <span class="text-success" id="seconds">5</span> seconds:</p>
//                         <h2 className="display-2 mb-5" id="current-word">hello</h2>
//                         <input type="text" className="form-control form-control-lg" placeholder="Start typing..." id="word-input" autofocus />
//                         <h4 className="mt-3" id="message"></h4>
//                     </div>

//                     <div className="row mt-5">
//                         <div className="col-md-6">
//                             <h3>Time left: <span id="time">0</span></h3>
//                         </div>
//                         <div className="col-md-6">
//                             <h3>Score: <span id="score">0</span></h3>
//                         </div>

//                         <h6 className="drop-heading">Select difficulty by time:</h6>
//                         <select name="drop" id="dropdown" className="custom-select" onChange="difficultyChange(this)">
//                             <option value="easy">Easy - 5 seconds per word</option>
//                             <option value="medium">Medium - 3 seconds per word</option>
//                             <option value="hard">Hard - 2 seconds per word</option>
//                         </select>

//                         <br />

//                      <h6 className="drop-heading">Select difficulty by length of words:</h6>
//                         <select name="dropword" id="dropdown-word" className="custom-select" onChange="wordChange(this)">
//                             <option value="easy">Easy - short words</option>
//                             <option value="medium">Medium - medium sized words</option>
//                             <option value="hard">Hard - long words</option>
//                         </select>
//                     </div>

//                     <button className="btn-lg btn-primary" id="start" onClick={startGame}>Start Playing</button>

//                     <div className="row mt-5">
//                         <div className="col-md-12">
//                             <div className="card card-body bg-secondary text-white">
//                                 <h5>Instructions</h5>
//                                 <p>Type each word in the given amount of time to score one point. To play again just type the current word. This will reset your score letting you start again.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Typing;
