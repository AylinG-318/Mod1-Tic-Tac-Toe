//  ----API Information Section----

/*
    -----NOTE-----
I have reverted to an earlier version of the project, which thankfully works as intended. 
COMMIT NAME:  "Minimal progress. Closer to solving one bug"
    From now on, this will be my benchmark for mostly functioning code. 
        */
const GAMES_URL = `https://opentdb.com/api.php?amount=50&category=15`
const TRIVIA_BOOLEAN_URL = "https://opentdb.com/api.php?amount=50&category=15&difficulty=easy&type=boolean"
const TRIVIA_ANIME = "https://opentdb.com/api.php?amount=50&category=31&difficulty=easy"
const TRIVIA_CARTOON =`https://opentdb.com/api.php?amount=50&category=32&${diffText}`

const LEVEL_EXTEND = "&difficulty="
const TYPE_EXTENDER = `&type=multiple`
const AMOUNT_EXTENDER = "amount="
//Remember to add a "&" after each extender to link them together.
const CATEGORY_EXTENDER = "category=" //Then insert a number of one's choosing. 

//So we want the user to chose a difficulty. Let's do it. 

let easyButton = document.querySelector("#easy");
let mediumButton = document.querySelector("#medium");
let hardButton = document.querySelector("#hard")

var diffText = "";
var buttonPressed = false;

//Minus (two * (yourPreferedNumber)) points to my entire grade, to my entire life, I know. 

easyButton.addEventListener("click", () => {
    let options = document.querySelector(".optionsMenu")
    let userSelection = easyButton.innerHTML;
    options.innerHTML = `Difficulty: Easy`
    buttonPressed = true;
     diffText = "easy"
})

mediumButton.addEventListener("click", () => {
    let options = document.querySelector(".optionsMenu")
    let userSelection = easyButton.innerHTML;
    options.innerHTML = `Difficulty: Medium`
    buttonPressed = true;
    diffText = "medium"
})

hardButton.addEventListener("click", () => {
    let options = document.querySelector(".optionsMenu")
    let userSelection = easyButton.innerHTML;
    options.innerHTML = `Difficulty: Hard`
    buttonPressed = true;
    diffText = "hard"
})



// What do we want to happen? 
// let waitToFire = (allBoxes) => {
//     if (!buttonPressed) {
//         let stopIt;
//         setInterval( stopIt = () => {
//             //Do nothing until buttonPressed is true.
//             console.log("I'm firing!")
//         }, 3000)
//     } else {
//         clearInterval(stopIt);
//         setEventListeners(allBoxes)
//         console.log("No more firing. Game time.")
//     }
// }
// var counter = 0;

let waitForIt =() => {
    if (!buttonPressed ) {
    setTimeout(waitForIt, 1500);
    console.log("I'm firing!")
  
    } else {
  console.log("I'm done firing now.")
  setEventListeners(allBoxes)
    }
  }

//   function setButtonPress() {
//       if (counter >= 10) {
//       buttonPressed = true;
//       }
//   } ---> This was for testing purposes.

//----The API call function----
let questionPrompt = document.querySelector(".questionPopUp");
let questionChoices = document.querySelector(".questionChoices")
let questionsArray = [];
//We need to scramble the answers. As it is, we'll always get the correct answer first! 
let numbersUsedArray = [];
// numbersUsedArray currently unutilized.
let answerInput = document.querySelector("input");
let answerButton = document.querySelector(".buttonSubmit");
let finalVerdict = document.querySelector(".finalVerdict")

let answerScrambler = (arr) => {
    let numberOfItems = arr.length - 1; //We already know the size of each array.
    let temporaryIndex;
   
    //What's the easiest way to scramble this array? 
    //While loop is risky. 
    // ah...the card game way. 
    while (numberOfItems != 0) {
        randomIndex = Math.floor(Math.random() * 3) // 0, 1, 2, 3
        temporaryIndex = arr[numberOfItems]; //tempIndex = arr[3]
        arr[numberOfItems] = arr[randomIndex]; //arr[3] == arr[random]
        arr[randomIndex] = temporaryIndex;  // arr[random] = temporary
        numberOfItems -=1;
        //I believe this was the logic.
    }


    return arr;
}

let answerPusher = (arr) => {
    let finalQuestions = [];
    arr.forEach( (el) => {
        finalQuestions.push(el);
    })
    return finalQuestions;
}

let answerChecker = (arr, input) => {
    if (arr.includes(input)) {
        finalVerdict.innerHTML = "Correct!"
        console.log("That's right!")
        alert(`${finalVerdict.innerHTML} Next player, please.`)
        // changePlayerMarker();
        return true;
    } else {
        finalVerdict.innerHTML = "Sorry, that's incorrect!"
        console.log("Ah, tough luck.")
        alert(`${finalVerdict.innerHTML} Next player, please.`)
        // changePlayerMarker();

        return false;
    }
    //So, what we want to do here is determine whether an answer is correct or not. 
    //...We're going to have to be user friendly and make buttons.
    // right, that'll be the last thing we work on for today. 
    // I WANT the main feature of the dang app to work, but if not...oh well. 
}

// I'd love to introuce a score count, but that is also a huge problem with the way
// everything's been set up. It's gotten awfully unruly. If I had more time, I'd burn this all
// down and start fresh. 

let totalQuestions;
let playerXScore = 0;
let playerXWrong = 0;

let playerOScore = 0; 
let playerOWrong = 0;

let playerXdiv = document.querySelector(".xRight");
let playerOdiv = document.querySelector(".oRight");

let playerXWrongDiv = document.querySelector(".xWrong");
let playerOWrongDiv = document.querySelector(".oWrong");


//-----Below is buggy code for a Right/Wrong Score counter. 

// let correctMarker = (playerMarker, answerCheck) => {
//         if (playerMarker === "X" && answerCheck) {
//             playerXScore +=1;
//             playerXdiv.innerHTML = `|| Right Answers: ${playerXScore}`;
//         }
//         if (playerMarker === "O" && answerCheck) {
//             playerOScore +=1;
//             playerOdiv.innerHTML = `|| Right Answers: ${playerOScore}`;
//         } 
    
    
//         //Ah! The error might be because we've already made the switch by this point? 
//         //What's flawed about this logic? It's that we switch markers after the first click.
//         //See? Lots of problems just because of the headache I made for myself with the axios call. 
//         if (playerMarker === "X" && !answerCheck) {
//             playerXWrong +=1;
//             playerXWrongDiv.innerHTML = `|| Wrong Answers: ${playerXWrong}`
//         }

//         if (playerMarker === "O" && !answerCheck) {
//             playerOWrong +=1;
//             playerOWrongDiv.innerHTML = `|| Wrong Answers: ${playerOWrong}`
//         }

// }


let phaseController = (answerCheck, allBoxesIndex) => {
    // correctMarker(playerMarker, answerCheck);
    if (answerCheck) {
        allBoxes[allBoxesIndex].innerHTML += `${playerMarker}`;
        ticBoard[allBoxesIndex] = `${playerMarker}`
        console.log(ticBoard) //For debugging purposes
        changePlayerMarker();
        allBoxes[allBoxesIndex].classList.add("selected")
        //Okay, keeping this away from here seems to have done the trick for this problem.
        // return true;
    } else {
        //IMPROVEMENT TO BE MADE: Why not have a promise call here, to change the question?
        //Oh god...
        changePlayerMarker();
        // return false;
        //ISSUE: Oh dear. I have the buttons so that they can only be selected once. 
        // Maybe I can set up a function that checks if it's empty instead of having
        // {once:true} there? 

        //New ISSUE 2: This won't work because it's connected to the for-loop. Damn. 
        // ISSUE 2: Corrected. Accept i as a parameter for the parent function and this one.
            // (Bad design, but until I learn more about promises and how they work, it'll do.)
    }
}


// let runOnlyOnce = (phaseContRepresent, boxIndex) => {
//     if (phaseContRepresent) {
//         allBoxes[boxIndex].addEventListener("click", () => {

//         }, {once: true})
//     }
// }
//New gameplay. Make buttons for every question.
// answerButton.addEventListener("click", answerChecker())
let buttonA = document.querySelector("#choiceA")
let buttonB = document.querySelector("#choiceB")
let buttonC = document.querySelector("#choiceC")
let buttonD = document.querySelector("#choiceD")


let buttonSetter= (answerArr, correctAnswer, i) => {
    buttonA.innerHTML = answerArr[0];
    buttonB.innerHTML = answerArr[1];
    buttonC.innerHTML = answerArr[2];
    buttonD.innerHTML = answerArr[3];

    let allButtons = document.querySelectorAll(".choices");
    console.log(allButtons)
    // //Remember, our class is choices, so .choices. if by id, it's #
    for (let j = 0; j < allButtons.length; j+=1) {
        allButtons[j].onclick = () => {
            allButtons[j].classList.toggle("clicked");
                phaseController(answerChecker(correctAnswer, answerArr[j]), i);
                //Oh, we're setting this every time. Could that be it? 
            console.log(allButtons[j])
            console.log(answerArr[j])

        //I need to figure out the pattern. Every time this function runs,
        // buttons 0 - 4 are set. Then, the main function of the game runs. 
        // Now, what does answerChecker do? 
        // It takes answerArr[j] (the button clicked), and compares it with the correct answer.
        // Then we go to the phaseController. phaseController checks if the answer was correct or false. 
        // if correct, we set the inside and change players.
        // if incorrect, we tell the player they screwed up and change players.

        //SOLUTION: addEventListener stacks. everytime we loop, we STACK the event listener.
        //I would've never found out if I hadn't added alerts to phaseController.
        //Solution: change to onClick. allBoxes's eventListeners don't matter. They're only set once. 

        }
    }
 
}

let questionSetUp = async (i) => {
    let response = await axios.get(`${GAMES_URL}${LEVEL_EXTEND}${diffText}`)
    let  trivia = response.data;
    // let choiceResponse = answerInput.value;
    //Triva is now our response data. We can manipulate it without guilt, I hope.
  
    //---Below would be a seperate function---
    let randomNum = Math.floor(Math.random() * 49) //We have 50 questions. 

    let allAnswers = answerPusher(trivia.results[randomNum].incorrect_answers);
    let correctAnswer = trivia.results[randomNum].correct_answer
    allAnswers.push(trivia.results[randomNum].correct_answer);

    let scrambledAnswers = answerScrambler(allAnswers);


    questionPrompt.innerHTML = trivia.results[randomNum].question;
    // questionChoices.innerHTML= `${scrambledAnswers}`;
    buttonSetter(scrambledAnswers, correctAnswer, i);

    // answerButton.addEventListener("click", () => {
    //     let choice = document.querySelector("input").value;
    //     console.log("Button is functional")
    //    phaseController(answerChecker(correctAnswer, choice), i);
    //     //ISSUE FOUND: choiceResponse gives us nothing.
    //     //Issue Corrected: choice now gives us something, but it still doesn't work. 
    //     //Ultimate solution: ...return "false", as well. I only returned true. 
    //     //Behavior: changeMarker does not work on the first go, or if two answers are correct in a row.
    //     // Why???? 

    //     //COMMIT REVERSION CHECK:
    //     //So, why does this work here, but it doesn't on my latest version? 
    //     //Did I just mess up all button functionality with the introduction of the other ones? 
        
    //  })

    console.log(trivia.results[randomNum])
   
} 




// ---The Setup ----
let ticBoard = new Array(9).fill("");
// This board will be the basis on which we will check if a win condition is made.

// ---The win conditions array----
let winConditionArray =  [ 
                          
                           [0,1,2], 
                           [3,4,5],
                           [6,7,8],
                           [0,4,8],
                           [2,4,6],
                           [0,3,6],
                           [1,4,7],
                           [2,5,8]
                           
                                   ]



//--- Setting up the Reset Button ----
let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", ()=> {
    window.location.reload(true);
})

// ---- Onto the Game flow ----

// --- Win conditions
let playerVictory = (player) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","winningQuote");
    newDiv.innerHTML += `Congrats, ${player}! You won!`
     document.body.appendChild(newDiv);
     setTimeout( () => {
         window.location.reload(true)
     },4000)
}

let playerVictoryDemo = () => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","winningQuote");
    newDiv.innerHTML += `Congrats, player! You won!`
     document.body.appendChild(newDiv);
     setTimeout( () => {
        window.location.reload(true)
    },4000)
}

let playerStalemate = () => {
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "stalemateQuote");
    newDiv.innerHTML += `Stalemate! You two are pretty good at this.`
    document.body.appendChild(newDiv);
    setTimeout( () => {
        window.location.reload(true)
    },4000)
}



//---Setting up the Game Order---
let playerX = "X"
let playerO = "O"


let coinFlipResult = () => {
  
    let num = Math.floor(Math.random() * 10) + 1; //Plus one so we don't get zero. 
    console.log(num);
    if (num < 5) {
        return true;
        // This means we start with Xs
        // true will stand for playerOne/playerX
    } else {
        return false;
        //This means we start with Os
        //Let's not fiddle with player two. We just need to know if 
        // playerOne is false.
    }
}
// Our coinflip works. Now for this, we need to figure out the CSS representation. 


let playerControlDiv = document.querySelector(".playerControlDiv")
let playerWaitingDiv = document.querySelector(".playerWaitingDiv")

let changePlayerMarker = () => {
    if (playerMarker === "X") {
       
        playerMarker = "O"
        previousPlayer = "X"
        
        // playerControlDiv.innerHTML = `You're up next, Player ${previousPlayer}!`
        playerWaitingDiv.innerHTML = `Your turn, ${[playerMarker]}.`
      
        
        //NICE!
    } else {
        playerMarker = "X"
        previousPlayer = "O"
   
        playerWaitingDiv.innerHTML = `Your turn, ${playerMarker}.`

        // playerControlDiv.innerHTML = `You're up next, Player ${previousPlayer}!`

}

}


let playerOrderX = document.querySelector(".playerOrderX")
let playerOrderO= document.querySelector(".playerOrderO")

let firstPlayer = (coinFlip) => {
    if (coinFlip) {
       playerControlDiv.innerHTML = `Player Order: ${playerX} first, ${playerO} second!`
    
        return playerX;
    } 
    if (!coinFlip) {
      playerControlDiv.innerHTML = `Player Order: ${playerO} first, ${playerX} second!`
        // playerOrderO.innerText += "Player 1: O"
        // playerOrderX.innerText += "Player 2: X"
        return playerO;
    }
    //So, if the coinFlip is true, the value of firstPlayer will be playerX
}

// console.log(firstPlayer(coinFlipResult())); 

let playerMarker = firstPlayer(coinFlipResult());
let previousPlayer = "";



let winConditionArrayCheck = (arr) => {

    let isVictory = false;
 
    arr.forEach( (element) => {
        console.log("winConditionArrayCheck is working.")
        //This console log confirms that with every click, the function runs.
        
       if (ticBoard[element[0]] === "X" && ticBoard[element[0 + 1]] === "X" &&
       ticBoard[element[0 + 2]] === "X" || 
       ticBoard[element[0]] === "O" && ticBoard[element[0 + 1]] === "O" &&
       ticBoard[element[0 + 2]] === "O") {
           //At the moment, these are hardcoded for debugging purposes. I would like to replace them with 
           // a general "playerMarker" function. 
          
           playerVictoryDemo();
           console.log("Victory!")
        //    alert('You see that? VICTORY')
          //The alert's a little annoying...
           isVictory = true;
      
    
    }

    if (!isVictory) {
    let remainingSpace =ticBoard.filter( (element) => {
            return (element === "");

        })
        if (remainingSpace.length <= 1) {
            console.log("Take a look at this array:" + remainingSpace)
            playerStalemate();
            console.log("That's a stalemate.")
        }
    }
        
     
   })
}

var didCloseTrigger = false;
// My third var! I sure do love SINNING. I feel something crawling on my back...
// the weight of three vars.

let closeToVictory = (arr) => {
    let isCloseVictory = false;
 
    arr.forEach( (element) => {
        console.log("winConditionArrayCheck is working.")
        //This console log confirms that with every click, the function runs.
    if (!didCloseTrigger) {
       if (ticBoard[element[0]] === "X" && ticBoard[element[0 + 1]] === "X" ||
       ticBoard[element[0 + 2]] === "X" && ticBoard[element[0 + 0]] === "X" 
       || ticBoard[element[0 + 1]] === "X" &&  ticBoard[element[0 + 2]] === "X" ||
       ticBoard[element[0]] === "O" && ticBoard[element[0 + 1]] === "O" ||
       ticBoard[element[0 + 2]] === "O" && ticBoard[element[0 + 0]] === "O" 
       || ticBoard[element[0 + 1]] &&  ticBoard[element[0 + 2]]  === "O") {
           //At the moment, these are hardcoded for debugging purposes. I would like to replace them with 
           // a general "playerMarker" function. 
          
        
         console.log("It's getting spicy!")
         let playMegalovania = document.createElement("embed")
         playMegalovania.setAttribute("src","/potential_images/Homestuck - MeGaLoVania.mp3")
         document.querySelector(".announcerChatter").appendChild(playMegalovania);
        //    alert('You see that? VICTORY')
          //The alert's a little annoying...
           isCloseVictory = true;
           didCloseTrigger = true;
       }
    }
    })
}

        
    

let allBoxes = document.getElementsByClassName("gameSquare");

//How about this as a way to improve...have two buttons. One on the outside of the div, one on the inside. 
 // Will that solve my issue? Have the one on the "outside" be clickable as many times as possible. 
 // Once an action is confirmed, set the marker, and NEVER be able to set it again.

 // That sounds like it could work. Implementing it...hoo boy. \

// My grade's probably in the negatives at this point. 
 


let arrayCheck = (i) => {
    //Here, I want to STOP the click if that particular box already has a marker in it. 
    if (allBoxes[i].innerHTML === "") {
          questionSetUp(i);
        //   changePlayerMarker();
          winConditionArrayCheck(winConditionArray);
          console.log("click has been confirmed.")
          closeToVictory(winConditionArray);
    //  } else {
    //      allBoxes[i].addEventListener("click", () => {
    //          let hasThisButtonBeenPressed = false;
    //         if (!hasThisButtonBeenPressed) {
    //             arrayCheck(i);
    //             hasThisButtonBeenPressed = true;
    //             }
    
    //             if (hasThisButtonBeenPressed) {
    //                 hasThisButtonBeenPressed = false;
    //             }
         } else if (allBoxes[i].innerHTML === "O" || allBoxes[i].innerHTML === "O") 
    {
        alert("Next player, please.")
        winConditionArrayCheck(winConditionArray);
        changePlayerMarker();
        closeToVictory(winConditionArray);

    }
}
//}



let setEventListeners = (allBoxes) => {
    for(let i = 0; i < allBoxes.length; i+=1) {
        allBoxes[i].addEventListener("click", () => {
    
            arrayCheck(i);
           
            // if (!hasThisButtonBeenPressed) {
            // arrayCheck(i);
            // hasThisButtonBeenPressed = true;
            // }

            // if (hasThisButtonBeenPressed) {
            //     hasThisButtonBeenPressed = false;
            // }
        
            //So, what's happening that we're getting all those Alerts now? 
            //Every button is fitted with this.
            //Every button will do this every time it's checked. 
            //if the button hasn't been pressed before, it will execute. If it has, it'll toggle.
            //Why? Mainly to debug, really. 
           
            // allBoxes[i].innerHTML += `${playerMarker}`;
            // ticBoard[i] = `${playerMarker}`
            // console.log(ticBoard) //For debugging purposes
           
 
            winConditionArrayCheck(winConditionArray);
            closeToVictory(winConditionArray)   
            console.log("click has been confirmed.")
          
         })
         // {once: true}

        }

}

// setEventListeners(allBoxes);
// waitToFire(allBoxes);

waitForIt(allBoxes);

