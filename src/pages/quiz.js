import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questionData from "../data/questions.json";

const Quiz = () => {
  const navigate = useNavigate();

  const playerName = sessionStorage.getItem("playerName");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7 * 60);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
  const handleBeforeUnload = (event) => {
    if (!timeUp) {
      event.preventDefault();
      event.returnValue = "";
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
  }, [timeUp]);


  const getRandomQuestions = (questions, amount) => {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, amount);
};


  const [quizQuestions] = useState(() =>
  getRandomQuestions(questionData, 10)
);

   const question = quizQuestions[currentQuestion];


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          setTimeUp(true);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;





  const handleAnswer = (option) => {

    if (answered || timeUp) return;

    setSelectedAnswer(option);
    setAnswered(true);


    if (option === question.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };





  const handleNextQuestion = async () => {
  if (currentQuestion < quizQuestions.length - 1) {
    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer(null);
    setAnswered(false);
    return;
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerName,
        score: score,
        totalQuestions: quizQuestions.length,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save quiz result");
    }

    const savedResult = await response.json();

   

    sessionStorage.setItem(
      "quizResult",
      JSON.stringify(savedResult)
    );

    navigate("/review");
  } catch (error) {
    console.error("Error saving result:", error);
  }
};




  const getOptionStyle = (option) => {
    
    if (!answered) {
      return "bg-white border-gray-200 hover:border-[#087653] hover:bg-[#f3faf6]";
    }

    
    if (option === question.correctAnswer) {
      return "bg-green-100 border-green-500 text-green-700";
    }


    if (option === selectedAnswer && option !== question.correctAnswer) {
      return "bg-red-100 border-red-500 text-red-700";
    }


    return "bg-gray-100 border-gray-200 text-gray-500";
  };





  const options = [
    {
      key: "optionA",
      label: "A",
      text: question.optionA,
    },
    {
      key: "optionB",
      label: "B",
      text: question.optionB,
    },
    {
      key: "optionC",
      label: "C",
      text: question.optionC,
    },
    {
      key: "optionD",
      label: "D",
      text: question.optionD,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3faf6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
          <p className="text-sm font-semibold text-[#087653]">
              NYSC Knowledge Quiz
          </p>

          <h1 className="text-2xl font-bold text-[#102d23] sm:text-3xl">
          Welcome, {playerName}!
          </h1>

         <p className="mt-1 text-sm text-gray-500">
    Test your knowledge and see how much you know.
        </p>
       </div>

         

          <div
            className={`flex items-center gap-2 rounded-xl px-5 py-3 font-bold shadow-sm ${
              timeLeft <= 60
                ? "bg-red-100 text-red-600"
                : "bg-white text-[#087653]"
            }`}>
            
            <span className="material-symbols-outlined">timer</span>

            <span>{formattedTime}</span>
          </div>
        </div>

      

        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Question</p>

              <p className="font-bold text-[#102d23]">
                {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Score</p>

              <p className="font-bold text-[#087653]">
                {score}
              </p>
            </div>
          </div>

          

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-[#087653] transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / quizQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        

        {timeUp && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
            <h2 className="text-xl font-bold text-red-600">
              Time's Up!
            </h2>

            <p className="mt-1 text-sm text-red-500">
              Your quiz time has ended. You can no longer answer questions.
            </p>

            <p className="mt-3 font-semibold text-[#102d23]">
              Your current score: {score}/{quizQuestions.length}
            </p>
          </div>
        )}

        

        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold text-[#087653]">
              Question {currentQuestion + 1}
            </p>

            <h2 className="text-xl font-bold leading-relaxed text-[#102d23] sm:text-2xl">
              {question.question}
            </h2>
          </div>

          

          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.key}
                onClick={() => handleAnswer(option.key)}
                disabled={answered || timeUp}
                className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 ${getOptionStyle(
                  option.key
                )} ${
                  !answered && !timeUp
                    ? "cursor-pointer"
                    : "cursor-default"
                }`}>
                

                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${
                    answered && option.key === question.correctAnswer
                      ? "bg-green-500 text-white"
                      : answered &&
                        option.key === selectedAnswer &&
                        option.key !== question.correctAnswer
                      ? "bg-red-500 text-white"
                      : "bg-[#e7f5ef] text-[#087653]"
                  }`}
                >
                  {option.label}
                </span>

                

                <span className="font-medium">
                  {option.text}
                </span>
              </button>
            ))}
          </div>

          

          {answered && (
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              {selectedAnswer === question.correctAnswer ? (
                <div>
                  <p className="font-bold text-green-600">
                    ✓ Correct Answer!
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Well done! You selected the correct answer.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-bold text-red-600">
                    ✕ Incorrect Answer
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    The correct answer is{" "}
                    <span className="font-bold text-green-600">
                      {question[question.correctAnswer]}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}

          

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!answered || timeUp}
              className={`rounded-xl px-6 py-3 font-semibold transition ${
                answered && !timeUp
                  ? "bg-[#087653] text-white hover:bg-[#065c41]"
                  : "cursor-not-allowed bg-gray-200 text-gray-400"
              }`}
            >
              {currentQuestion === quizQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question →"}
            </button>
          </div>
        </div>

        

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
          This website is an independent educational and portfolio project.
          It is not affiliated with, endorsed by, or an official service of
          the National Youth Service Corps (NYSC).
          <p>Developed by BisortDev</p>
        </p>
      </div>
    </div>
  );
};

export default Quiz;