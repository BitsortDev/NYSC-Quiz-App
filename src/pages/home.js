import { useState } from "react";
import NyscImage from "../assets/khaki.png";
import PopUp from "../components/popUp";

function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProceed = () => {
    window.history.pushState({}, "", "/quiz");
    setIsPopupOpen(false);

  };

  return (
    <main className="min-h-screen bg-[#f3faf6] text-[#10201a]">
      
      
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          <div className="order-1">

            <span className="inline-flex rounded-full bg-[#dff3e9] px-4 py-2 text-sm font-semibold text-[#087653]">
              Welcome to the
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#10201a] sm:text-5xl lg:text-6xl">
              NYSC Knowledge Quiz
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Test your knowledge about the National Youth Service Corps
              (NYSC) and how well you really know the scheme.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 sm:gap-8">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f4ec] text-[#087653]">
                  <span class="material-symbols-outlined">mobile_question
                   </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10201a]">
                    10
                  </p>
                  <p className="text-xs text-gray-500">
                    Questions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f4ec] text-[#087653]">

                  <span className="material-symbols-outlined">
                    timer</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10201a]">
                    7
                  </p>
                  <p className="text-xs text-gray-500">
                    Minutes
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f4ec] text-[#087653]">
                  
                  <span className="text-lg font-bold">✣</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10201a]">
                    Multiple
                  </p>
                  <p className="text-xs text-gray-500">
                    Choice
                  </p>
                </div>
              </div>

            </div>

            <button
                  type="button"
                  onClick={() => setIsPopupOpen(true)}
                  className="
                    group mt-9 inline-flex items-center gap-3
                    rounded-full bg-[#087653] px-7 py-4
                    text-sm font-bold text-white
                    shadow-md shadow-[#087653]/20
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:bg-[#075f43]
                    hover:shadow-lg hover:shadow-[#087653]/30
                    active:translate-y-0
                    active:scale-[0.97]
                  "
                >
                  Start Quiz

                  <span
                    className="
                      text-lg
                      transition-transform duration-300 ease-out
                      group-hover:translate-x-1
                    ">→
                  </span>
                </button>

          </div>



          <div className="order-2">
            <div className="relative flex min-h-[330px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#e0f0e8] sm:min-h-[420px] lg:min-h-[520px]">

              <div className="absolute right-[-15%] top-[-10%] h-[80%] w-[70%] rounded-bl-[100px] bg-[#087653]" />

              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <div className="flex h-full w-full items-center justify-center rounded-xl text-center text-sm font-medium text-[#087653]/70">
                <img src={NyscImage} alt="NYSC Khaki"/>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


     
      <section className="border-t border-[#dcece4] bg-[#edf8f2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#d7e9df] px-5 py-7 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">

       
          <div className="flex gap-4 px-2 py-5 md:px-7 md:py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8f0e3] text-[#087653]">
        
              <span class="material-symbols-outlined">
                    build_circle</span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10201a]">
                Build your knowledge
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Learn about the history, aims and structure of NYSC.
              </p>
            </div>
          </div>


          <div className="flex gap-4 px-2 py-5 md:px-7 md:py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8f0e3] text-[#087653]">

              <span class="material-symbols-outlined">
                    frame_bug
                    </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10201a]">
                Test your understanding
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Answer 10 carefully selected questions.
              </p>
            </div>
          </div>


        
          <div className="flex gap-4 px-2 py-5 md:px-7 md:py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8f0e3] text-[#087653]">
       
              <span class="material-symbols-outlined">
                    track_changes
                    </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#10201a]">
                Track your progress
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                See your score and review your answers.
              </p>
            </div>
          </div>

        </div>
        <PopUp
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onProceed={handleProceed}
          />
      </section>

    </main>
  )
}

export default Home