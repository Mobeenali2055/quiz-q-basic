 const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language styles pages?",
      options: ["HTML", "CSS", "JavaScript"],
      answer: "CSS"
    },
    {
      question: "Which language adds interactivity?",
      options: ["CSS", "HTML", "JavaScript"],
      answer: "JavaScript"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");
  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");
  const finalScore = document.getElementById("finalScore");

  function loadQuestion() {
    feedbackEl.innerHTML = "";
    nextBtn.classList.add("hidden");

    const current = quizData[currentQuestion];
    questionEl.textContent = `Question ${currentQuestion + 1}: ${current.question}`;

    optionsEl.innerHTML = "";
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(option);
      optionsEl.appendChild(btn);
    });

    scoreEl.textContent = `Score: ${score}/${quizData.length}`;
  }

  function selectAnswer(selected) {
    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
      score++;
      feedbackEl.innerHTML = "<div class='correct'>Correct</div>";
    } else {
      feedbackEl.innerHTML = "<div class='wrong'>Wrong</div>";
    }

    nextBtn.classList.remove("hidden");

    // disable options
    document.querySelectorAll(".option").forEach(btn => {
      btn.disabled = true;
    });
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    finalScore.textContent = `Score: ${score}/${quizData.length}`;
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
  }

  loadQuestion();