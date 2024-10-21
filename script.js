const questions = [
    {
        question: "1. Aapka favorite color kya hai?",
        options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
        question: "2. Aapka favorite food kya hai?",
        options: ["Pasta", "Biryani", "Pizza", "Salad"],
    },
    {
        question: "3. Aapka favorite animal kya hai?",
        options: ["Dog", "Cat", "Elephant", "Tiger"],
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const optionsList = document.getElementById("options-list");
    const nextButton = document.getElementById("next-button");

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsList.innerHTML = ""; // Clear previous options

    questions[currentQuestionIndex].options.forEach((option) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.addEventListener("click", () => {
            nextButton.style.display = "block"; // Show next button
        });
        optionsList.appendChild(li);
    });

    nextButton.style.display = "none"; // Hide next button initially
}

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Complete!"); // Quiz completion message
        currentQuestionIndex = 0; // Reset for next round
        loadQuestion(); // Reload first question
    }
});

loadQuestion(); // Load the first question
