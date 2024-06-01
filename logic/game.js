document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
            hint: "This city is known as the City of Light."
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean",
            hint: "It stretches from the western shores of North and South America to the eastern shores of Asia and Australia."
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["W", "O", "H2O", "H"],
            answer: "H2O",
            hint: "It consists of two hydrogen atoms and one oxygen atom."
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "F. Scott Fitzgerald"],
            answer: "William Shakespeare",
            hint: "He is often regarded as the greatest writer in the English language."
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
            hint: "It is located in the Himalayas on the border between Nepal and China."
        },
        {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Fe", "Cu"],
            answer: "Au",
            hint: "Its name comes from the Latin word 'aurum', meaning shining dawn."
        },
        {
            question: "What is the capital of Japan?",
            choices: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
            answer: "Tokyo",
            hint: "It is one of the most populous cities in the world."
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
            answer: "Leonardo da Vinci",
            hint: "He was an Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography."
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
            hint: "It is named after the Roman god of war."
        },
        {
            question: "What is the chemical symbol for oxygen?",
            choices: ["O", "O2", "O3", "CO2"],
            answer: "O",
            hint: "It is essential for respiration and combustion."
        }
    ];
    
    

    const totalQuestions = questions.length;
    let currentQuestionIndex = 0;
    let totalPoints = 0;


    const questionCounter = document.querySelector('.question-counter');
    const totalPointsDisplay = document.querySelector('.total-points');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
        questionText.textContent = currentQuestion.question;
    
        // Clear previous choices
        choicesList.innerHTML = '';
    
        // Populate choices
        currentQuestion.choices.forEach(choice => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choice');
            li.appendChild(button);
            choicesList.appendChild(li);
        });
    
        // Display hint
        hintButton.disabled = false;
        hintText.textContent = currentQuestion.hint;
    }
    

    function updateTotalPoints() {
        totalPointsDisplay.textContent = `Total Points: ${totalPoints}`;
    }
    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedButton = event.target;
    
        if (selectedAnswer === currentQuestion.answer) {
            totalPoints += 10;
            updateTotalPoints();
    
            // Lấy ra các nút chọn và câu trả lời đúng
            const choiceButtons = document.querySelectorAll('.choice');
            const correctButton = choiceButtons[currentQuestion.choices.indexOf(currentQuestion.answer)];
    
            // Thêm lớp "correct" vào câu trả lời đúng
            correctButton.classList.add('correct-answer');
    
            // Chờ 3 giây trước khi chuyển sang câu hỏi tiếp theo
            setTimeout(function() {
                // Loại bỏ lớp "correct" khỏi câu trả lời đúng
                correctButton.classList.remove('correct-answer');
                
                // Move to the next question
                currentQuestionIndex++;
                if (currentQuestionIndex < totalQuestions) {
                    showQuestion();
                } else {
                    // End of quiz, handle accordingly
                    alert('End of quiz!');
                }
            }, 1000);
        } else {
            // Thêm lớp "incorrect" và loại bỏ lớp "correct"
            selectedButton.classList.add('incorrect');
            selectedButton.classList.remove('correct');
            // Incorrect answer, handle accordingly
            alert('Incorrect answer. Try again!');
        }
    }


    // Event delegation for handling choice clicks
    choicesList.addEventListener('click', function(event) {
        if (event.target.matches('.choice')) {
            const selectedAnswer = event.target.textContent;
            checkAnswer(selectedAnswer);
        }
    });

    // Show the first question when the page loads
    showQuestion();
});
