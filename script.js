//Quiz Questions and Answers
    const questionsArray = [
        {
            question:"What is Harry's last name in the Wizarding World series by JKR?",
            correctAnswer: "Potter",
            answers: ["Dursley", "Weasley", "Potter", "Granger"]
        },
        {
            question:"What animal is the main team in Haikyuu?",
            correctAnswer: "Crow",
            answers: ["Cat", "Owl", "Eagle", "Crow"]
        },
        {
            question:"In A:TLA, who is Prince Zuko's Uncle?",
            correctAnswer: "Uncle Iroh",
            answers: ["Uncle Sokka", "Uncle Iroh", "Uncle Aang", "Uncle Appa"]
        },
        {
            question:"What's the name of the movie with a blue villain turned hero?",
            correctAnswer: "Megamind",
            answers: ["Minions", "Megamind", "Meet the Robinsons", "Robots"]
        },
        {
            question:"In Scooby-Doo, what was the team's main mode of transportation?",
            correctAnswer: "The Mystery Machine",
            answers: ["The Mystery Machine", "The Mayhem Mystery", "The Mystery Mountain", "The Mystery Man"]
        },
        {
            question:"What are the four elements?",
            correctAnswer: "Earth, Fire, Air, Water",
            answers: ["Earth, Fire, Soil, Water", "Earth, Fire, Air, Water", "Earth, Fire, Air, Flame", "Wind, Fire, Air, Water"]
        },
        {
            question:"Which of the following is NOT a studio Ghibli movie?",
            correctAnswer: "Tokyo Godfathers",
            answers: ["My Neighbor Totoro", "Tokyo Godfathers", "Princess Mononoke", "Spirited Away"]
        },
        {
            question:"What's the name of the talented swordsman in One Piece?",
            correctAnswer: "Zoro",
            answers: ["Luffy", "Sanji", "Ussop", "Zoro"]
        },
        {
            question:"In The Adventure Zone podcast by the McElroy brothers, what's arc is played with the Monster of the Week rule set?",
            correctAnswer: "Amnesty",
            answers: ["Balance", "Graduation", "Ethersea", "Amnesty"]
        },
        {
            question:"Which character in Supernatural died the most times?",
            correctAnswer: "Dean Winchester",
            answers: ["Bobby Singer", "Dean Winchester", "Castiel", "Sam Winchester"]
        },
        {
            question:"In The Lord of the Rings, how many rings of power were there?",
            correctAnswer: "9",
            answers: ["10", "9", "13", "7"]
        }    
    ]

//Define some HTML element variables
    const quiz = $('.quiz')
    const startBtn = $('.start')
    const startDiv = $('#start')
    const questionDiv = $('.question')
    const answerDiv = $('.answers')
    const resultDiv = $('#result')
    
//Code to Deploy
    //Hide quiz at the beginning
        quiz.hide();
    //Hit start to deploy function startQuiz
        startBtn.on('click', startQuiz)

//Functions for code Reference
    //Start the quiz: hide the start button and show the hidden questions
        function startQuiz() {
            //Hide start Div
            startDiv.hide();
            //Select new question
            setNewQuestion();
            //Show quiz
            quiz.show();
        }


    function setNewQuestion() {
        //Create random number from available question index
            const randomQuestion = Math.floor(Math.random() * questionsArray.length)
        //Select random question from index and hold in new splice
        //(splice removes question from question index for no repeats)
            const newSplicedArray = questionsArray.splice(randomQuestion, 1)
        
        //Define new terms to hold content from new splice
            //Question
                const newQuestion = newSplicedArray[0].question
            //Answers
                const answers = newSplicedArray[0].answers
            //Correct Answer
                const correctNewAnswer = newSplicedArray[0].correctAnswer
        
        //Add Question information to HTML
            //Put question into question p
                questionDiv.text(newQuestion)
            //Empty answerDiv in prep for new answers
                answerDiv.empty()
            //Call createButton function
                createButton()
            
            //FUNCTIONS
            //Create Button function
            function createButton() {
                //Loop for all answers in array; add 2 to answer length to account for splicing
                for (let i = 0; i <= answers.length + 2; i++) {
                    //Create random number for answer index to randomize answers
                    const randomAnswer = Math.floor(Math.random() * answers.length)
                    //Splice random answer from answers list
                    let newRandomAnswer = answers.splice(randomAnswer, 1)
                    //Display answer in button
                    answerDiv.append(`<button>${newRandomAnswer}</button>`)
                }
            }

            
            //Correct Answer will be hidden until answer submitted and the 
            //div will change colors based on whether the selected answer 
            //was correct or not
                // console.log(correctNewAnswer)
                resultDiv.text("Correct Answer: " + correctNewAnswer)
    }

    
