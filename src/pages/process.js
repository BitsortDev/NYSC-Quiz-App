
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Your Name",
      description:
        "Click the Start Quiz button and enter your name. Your name will be used to personalise your quiz experience.",
      icon: "person",
    },
    {
      number: "02",
      title: "Start the Quiz",
      description:
        "Once you proceed, you will receive 10 randomly selected questions from our question bank.",
      icon: "play_arrow",
    },
    {
      number: "03",
      title: "Answer the Questions",
      description:
        "Read each question carefully and select the answer you believe is correct. You will receive instant feedback.",
      icon: "quiz",
    },
    {
      number: "04",
      title: "Complete the Quiz",
      description:
        "You have 7 minutes to complete the quiz. Try to answer all the questions before the timer runs out.",
      icon: "timer",
    },
    {
      number: "05",
      title: "Check Your Result",
      description:
        "After answering all the questions, click Finish Quiz to see your final score and percentage.",
      icon: "emoji_events",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3faf6]">
      
      <section className="px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#087653]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#087653] sm:text-sm">
            Simple & Easy
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#102d23] sm:text-4xl md:text-5xl lg:text-6xl">
            How It Works
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
            Test your knowledge of NYSC through a simple and interactive
            quiz. Follow these steps to get started and see how well you
            perform.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                  index === steps.length - 1
                    ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full"
                    : ""
                }`}
              >
                
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087653] text-white shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      {step.icon}
                    </span>
                  </div>

                  <span className="text-sm font-extrabold text-[#087653]/30">
                    {step.number}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#102d23]">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {step.description}
                </p>

                
                <div className="mt-6 h-1 w-10 rounded-full bg-[#087653] transition-all duration-300 group-hover:w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="border-y border-[#087653]/10 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#087653]">
              What to Expect
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102d23] sm:text-3xl md:text-4xl">
              Built for a Better Quiz Experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Everything is designed to make the quiz simple, engaging and
              easy to use.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#f3faf6] p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-[#087653]">
                shuffle
              </span>

              <h3 className="mt-4 font-bold text-[#102d23]">
                Random Questions
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Questions are randomly selected for every quiz attempt.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f3faf6] p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-[#087653]">
                timer
              </span>

              <h3 className="mt-4 font-bold text-[#102d23]">
                7-Minute Timer
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Challenge yourself to complete the quiz within the time limit.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f3faf6] p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-[#087653]">
                fact_check
              </span>

              <h3 className="mt-4 font-bold text-[#102d23]">
                Instant Feedback
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                See whether your selected answer is correct immediately.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f3faf6] p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-[#087653]">
                leaderboard
              </span>

              <h3 className="mt-4 font-bold text-[#102d23]">
                Final Score
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Get your score and percentage when you complete the quiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#087653] px-6 py-10 text-center shadow-lg sm:px-10 sm:py-14">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Ready to Test Your Knowledge?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Start the quiz, challenge yourself and find out how much you know
            about NYSC.
          </p>

          <a
            href="/"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#087653] transition duration-200 hover:bg-gray-100 active:scale-95 sm:px-8"
          >
            Start Quiz
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </div>
      </section>

      
      <div className="px-4 pb-8 text-center sm:px-6">
        <p className="mx-auto max-w-2xl text-xs leading-5 text-gray-400">
          This website is an independent educational and portfolio project. It
          is not affiliated with, endorsed by, or an official service of the
          National Youth Service Corps (NYSC).
          <p>Developed by BitsortDev</p>
        </p>
      </div>
    </main>
  );
};

export default HowItWorks;