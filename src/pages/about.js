
import PopUp from '../components/popUp';
import NyscImage from '../assets/khaki.png';

const features = [
  {
    number: "01",
    title: "Learn",
    description:
      "Explore interesting facts about the history, purpose and activities of the NYSC scheme.",
  },
  {
    number: "02",
    title: "Practise",
    description:
      "Challenge yourself with multiple-choice questions in a simple, interactive quiz.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Check your score, review your answers and discover what you've learnt.",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-white text-[#102D23]">
      
      <section className="bg-[#F2F8F4]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <span className="inline-flex rounded-full bg-[#E0F1E7] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#087653]">
              About the project
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learn more about the{" "}
              <span className="text-[#087653]">
                NYSC Quiz
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#596A60] sm:text-lg">
              An independently developed educational quiz
              designed to make learning about the National
              Youth Service Corps engaging and interactive.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#596A60] sm:text-base">
              Created as a web development portfolio project,
              this application brings together learning,
              practice and interactive technology.
            </p>

            <div className="mt-8">
              <PopUp className="inline-flex items-center gap-3 rounded-xl bg-[#006B45] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#004F34] hover:shadow-lg"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-[#C9E9D5] blur-2xl" />

            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[28px] bg-[#DCEFE3] sm:min-h-[400px] lg:min-h-[460px]">

                <img
                  src={NyscImage}
                  alt="NYSC Quiz project illustration"
                  className="h-full w-full object-contain"
                />
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087653]">
            What you can do
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Learn, practise and improve
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#596A60] sm:text-base">
            A simple quiz experience designed to make
            exploring NYSC-related knowledge more enjoyable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-[#E0EAE4] bg-white p-7 transition hover:-translate-y-1 hover:border-[#A5D4B7] hover:shadow-lg"
            >
             
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F4EC] text-xl font-extrabold text-[#087653]">
                {feature.number}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#596A60]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

     
      <section className="bg-[#F2F8F4] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#DCECE4] bg-white p-7 sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087653]">
              Behind the project
            </span>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Built for learning and practice
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#596A60] sm:text-base">
              This quiz was created as a personal portfolio
              project to demonstrate frontend development,
              responsive web design, React components and
              interactive application functionality.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#596A60] sm:text-base">
              It also provides an opportunity for visitors
              to test their general knowledge of the NYSC
              scheme in an accessible and engaging way.
            </p>

            <div className="mt-8 rounded-xl border-l-4 border-[#087653] bg-[#EAF5EE] p-5">
              <h3 className="font-bold text-[#075C3E]">
                Independent project disclaimer
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#476455]">
                This website is an independent educational
                and portfolio project. It is not affiliated
                with, endorsed by or an official service of
                the National Youth Service Corps (NYSC).
                Information provided here should not be
                treated as official NYSC guidance.
                <p>Developed by BisortDev</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;