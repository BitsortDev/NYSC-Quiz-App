import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();

  const playerName = sessionStorage.getItem("playerName") || "Player";

  const result = JSON.parse(
    sessionStorage.getItem("quizResult") || "{}"
  );

  const score = result.score || 0;
  const totalQuestions = result.totalQuestions || 10;
  const percentage =
    result.percentage ??
    Math.round((score / totalQuestions) * 100);

  const handleTryAgain = () => {
    sessionStorage.removeItem("quizResult");
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-[#f3faf6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-xl">
          
          <div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
          

           <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
               <div className="absolute h-24 w-24 animate-ping rounded-full bg-[#087653]/20"></div>
               <div className="absolute h-20 w-20 animate-pulse rounded-full bg-[#087653]/15"></div>


              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#087653] shadow-lg">
              <span className="text-4xl font-bold leading-none text-white">
                     ✓
                   </span>
                 </div>
               </div>

            
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#087653]">
              Quiz Complete
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-[#102d23] sm:text-4xl">
              Congratulations!
            </h1>

            <p className="mt-3 text-base text-gray-500">
              Great job, {playerName}! 🎉
            </p>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              You have successfully completed the NYSC Knowledge Quiz.
              Here is your final result.
            </p>

          
            <div className="mx-auto mt-8 w-full max-w-sm rounded-2xl bg-[#f3faf6] px-6 py-7">
              <p className="text-sm font-semibold text-gray-500">
                Your Score
              </p>

              <p className="mt-2 text-5xl font-extrabold tracking-tight text-[#087653] sm:text-6xl">
                {score}
                <span className="text-2xl font-bold text-gray-400 sm:text-3xl">
                  /{totalQuestions}
                </span>
              </p>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#087653] px-4 py-2">
                <span className="text-sm font-bold text-white">
                  {percentage}%
                </span>
              </div>
            </div>

            
            <div className="mt-7">
              {percentage >= 80 ? (
                <p className="text-sm font-medium leading-6 text-gray-600">
                  Excellent performance! Keep up the great work. 👏
                </p>
              ) : percentage >= 50 ? (
                <p className="text-sm font-medium leading-6 text-gray-600">
                  Well done! Keep learning and you will do even better.
                </p>
              ) : (
                <p className="text-sm font-medium leading-6 text-gray-600">
                  Good effort! Keep studying and give it another try.
                </p>
              )}
            </div>

            
            <button
              type="button"
              onClick={handleTryAgain}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087653] px-6 py-4 text-sm font-bold text-white transition duration-200 hover:bg-[#065c41] hover:shadow-lg active:scale-[0.98]"
            >
              Try Again
              <span aria-hidden="true">→</span>
            </button>
          </div>

       
          <p className="mx-auto mt-6 max-w-lg text-center text-xs leading-5 text-gray-400">
            This website is an independent educational and portfolio
            project. It is not affiliated with, endorsed by, or an
            official service of the National Youth Service Corps (NYSC).
             <p>Developed by BisortDev</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;