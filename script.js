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
            question:"In The Adventure Zone podcast by the McElroy family, which arc uses the Monster of the Week rule set?",
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
    const resetBtn = $('.reset')
    const nextBtn = $('.next')
    const questionDiv = $('.question')
    const answerDiv = $('.answers')
    const resultDiv = $('.result')
    let n = 0
    
//Code to Deploy
    //Hide quiz at the beginning && Hit start to deploy function startQuiz
        resetBtn.hide();
        nextBtn.hide();
        quiz.hide();
        resetBtn.on('click', resetQuiz)
        nextBtn.on('click', nextQuestion)
        startBtn.on('click', startQuiz)
       
//FUNCTIONS

    //Reloads the Quiz
        function resetQuiz () {
            location.reload();
        }
    //Loads next Question
        function nextQuestion() {
            nextBtn.hide();
            resultClear();
            setNewQuestion();
        }
    //Clears the result div
        function resultClear() {
            resultDiv.empty();
            resultDiv.css("background-color", "transparent")
        }
    //Start the quiz: hide the start button and show the hidden questions
        function startQuiz() {
            startBtn.hide();
            setNewQuestion();
            quiz.show();
        }

    //Select next random question from array and remove to new array using splice
        function setNewQuestion() {
            
            //Create random number from available question index && Select random question from index and hold in new splice
                const randomQuestion = Math.floor(Math.random() * questionsArray.length)
                const newSplicedArray = questionsArray.splice(randomQuestion, 1)
            
            //Define new terms to hold content from new splice
                //Question && Answers && Correct Answer
                const newQuestion = newSplicedArray[0].question
                const answers = newSplicedArray[0].answers
                const correctNewAnswer = newSplicedArray[0].correctAnswer
            //If random number is null or qu randomQuestion === null || randomQuestion === 0
                if (n >= 10) {
                    finished();
                }
            //Add Question information to HTML
                //Put question into question p && Empty answerDiv in prep for new answers && Call createButton function
                questionDiv.text(newQuestion)
                answerDiv.empty()
                createButton()

                let answered = false
                $("button").on("click", function() {
                    if (answered === false) {
                        $(this).addClass("selected");
                        $('button').prop("disabled", true)
                        $('#reset').show();
                        $('#next').show();

                        if ($(this).text() === correctNewAnswer) {
                            resultDiv.text("Correct!! The answer is " + correctNewAnswer)
                            resultDiv.css({
                                "background-color": "hsl(130, 60%, 70%)",
                                "color": "hsl(130, 80%, 10%)"
                                })

                        } else {
                            resultDiv.text("Incorrect! The correct Answer is " + correctNewAnswer)
                            resultDiv.css({
                                "background-color": "hsl(0, 60%, 70%)",
                                "color": "hsl(130, 80%, 10%)"})
                    }
                }
                answered = true;
                resetBtn.show();
                nextBtn.show();
                n++
                })

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
        }
        
            function finished() {
                quiz.hide();
                $('h1').append('h2').text('Thank you for playing!');
            }
