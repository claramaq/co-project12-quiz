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
            const randomNum = Math.floor(Math.random() * questionsArray.length)
        //Select random question from index and hold in new splice
        //Splice removes question from question index for no repeats
            const newSplicedArray = questionsArray.splice(randomNum, 1)
        
        //Define new terms to hold content from new splice
            //Question
                const newQuestion = newSplicedArray[0].question
            //Answers
                const newAnswers = newSplicedArray[0].answers
            //Correct Answer
                const correctNewAnswer = newSplicedArray[0].correctAnswer
        
        //Console log for testing before each use to ensure works 
        //[will remove before final submission]
            //New question put in HTML question section
                console.log(newQuestion)
                $('.question').text(newQuestion)
            //New Answers put in HTML buttons section
            //Need to parse each answer to own button
                console.log(newAnswers)
                // $('button').text(newAnswers)
            //Correct Answer will be hidden until answer submitted and the 
            //div will change colors based on whether the selected answer 
            //was correct or not
                console.log(correctNewAnswer)
                $('#result').text("Correct Answer: " + correctNewAnswer)
    }
