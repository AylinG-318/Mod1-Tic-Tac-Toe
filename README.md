# Tic-Tac-Toe-Project

Here I will attempt to make a tic-tac-toe game that also doubles as a trivia game. 
I fear that I've bitten off more than I can chew, but I'll give it my best effort.

-----Website Link-------
https://elastic-pasteur-005bbd.netlify.app/


How to Play: 
    Before the Tic-Tac-Toe board can activate, you must click a difficulty setting. 
    (An immediate improvement I could make is so that this as a seperarte page, then to show the board)

    After about two seconds pass (frustrating for the user), the board is viable and players can begin their
    turns. The player order is listed toward the top of the screen, and after the first move X and O will alternate.

    Right now, the program works on the honor system. If a player gets a question wrong, the other player can
    "snipe" it. There is no reason to not snipe a question. That is another improvement which I would like to 
    leave for the future. At the very least, the game works now. 

Final Notes:
    One major source of trouble has been with the trivia integration.
    I'm both happy and frustrated to note that the issue was due to a misunderstanding of addEventListeners
    rather than one of logic. the solution was to replace the eventListener with an onclick. 
    (However, my logic wasn't very solid. I made many questionable decisions along
    the way. I mean that the program was going to mostly work with my approach.)

    This was a solution that took me almost two days to solve. I'm not happy with myself on that. 




Final Day Summary: 

    With this project, I've attempted to implement two games into one, and I delivered none. 
    There are several improvements I'd like to make, with the most important one being a functioning
    game. 

    The core feature of the Trivia App aspect is missing, which is to keep track of your scores.
    That is something I'd like to implement soon, after I burn down this code and pick up some scraps
    from the ashes. 

    I didn't make full use of my API, either. I would like to give the users the option to select their 
    category as well, likely from a drop-down menu. 

    The most disappointing thing for me is the fact that the Tic-Tac-Toe game only works by itself.
    (And works well by itself!)
    As soon as I attempted to implement the Trivia section, it all unraveled. 

    How-To-Play: 
    Please don't. 
    If you must, once you pick a square, I recommend you stick to it, whether you get your answer
    right or wrong. (Undoing the purpose of a trivia app.) You pick another square, and it'll glitch out. 
    I'm fairly certain I know why it's happening, and to prevent it I'd have to start all over and use 
    better logic this time. 

    Below was my progress. 
    
-----Plans for Day 1:------ 

1) Finalize Tic-Tac-Toe logic within JavaScript files.


Progress: 
    CSS: 
        1) Basic tic-tac-toe grid is completed. 
        2) Something gets stamped onto the gameSquares once they are pressed.
        2) a DIV for victory and stalemate is able to be displayed. 
        
    JavaScript:
        1) gameBoard is initialized within, and will have either "X" or "O" stamped into it
           depending on player turn. Currently, only "X" is getting stamped into it. 
           Update: X or O alternates depending upon the result of the coinFlip. 
        2) A "winCondition" function is finalized and is working. 
        3) A "coinFlipResults" function is finalized. Implementation remains.
        4)
            Stalemate condition has been added to "winCondition", but cannot be tested until player phases has been implemented.
            Known bug: Stalemate condition executes if the game is won on the "last" possible play.
            Better wording: If there is only one space left on the gameboard when the game is won, the Stalemate
                             message pops up. 

Remaining: 
    CSS: 
        Practically all of it. 
    JavaScript: 
      (Not yet done) Implementing player phases.

      (Done, with conditions*) The "setEventListener" function, which allows us to stamp something onto our grids,
        must be modified to accomodate player phases.
            *The condition: I must still alert the player to whose turn it is. There is no visual indication,
                            so a player has to guess at the moment. 

      (Done)  And very important--I must implement conditions for a draw in the winCondition function. 


2) Learn API calls with intended trivia database, and attempt to display them
on a different part of the screen, or on another HTML file for practice before integration
into the app. 



Progress: 
    I predict I will have to do this tonight, after class. 


--------Day 2 Progress---------

Progress: 
    CSS: Barely moved an inch. I will choose to spend all day tomorrow on the looks. Today, I want to get
    it running 100%.

JavaScript: 
    1) Almost everything is functional, even if in a primitive state. Two glaring bugs remain.
        Bug A) playerMarker change remains the same after a correct answer.
        Bug B) With trivia implementation, a winner is not announced immediately. Only once there is another click. 

        Minor Bugs: 
        Minor Bug A)  Stalemate condition triggers at the same time as a win condition, if only 1 space remains
                        at victory.
        Minor Bug B)  


---------Day 3 Progresss------------

Progress: 
    CSS: Today's the day to do it. 

    Javascript: 
                Most basic implementation is ready except for the button implementation.
                What is unfortunate about this there are many answers that cannot be inputed intivitively 
                due to the way the "correct_answer" key is written in question object. 
                If I cannot get the button implementation done by 12:30 PM today, I will have to leave it 
                for later in favor of styling. I am unhappy with a game that cannot function at full
                capacity, but it mostly functions, at least. 

