import { useState } from "react";

function PopUp({ isOpen, onClose, onProceed }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  

  if (!isOpen) return null;

  async function handleSubmit(e) {
  e.preventDefault();

  const cleanName = name.trim();

  sessionStorage.setItem("playerName", cleanName);
  console.log(cleanName)

  if (!cleanName) {
    setError("Please enter your name to continue.");
    return;
  }
  

  try {
    const response = await fetch("http://localhost:8000/api/v1/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: cleanName,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to save your name");
    }

    onProceed(cleanName, window.location.href = "/quiz");
  } catch (error) {
    console.error(error);
    setError("Something went wrong. Please try again.");
  }
}

  

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071C14]/60 px-4 backdrop-blur-[3px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-modal-title"
        className="relative w-full max-w-[390px] rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100"
        >
          ✕
        </button>

        
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E3F4EA]">
          <span className="material-symbols-outlined">home_app_logo</span>
        </div>
      

        <h2
          id="quiz-modal-title"
          className="text-center text-2xl font-extrabold text-[#102D23]"
        >
          Welcome to NYSC Quiz!
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          Before we begin, what should we call you?
        </p>

        <form onSubmit={handleSubmit} className="mt-7">
          <label
            htmlFor="player-name"
            className="mb-2 block text-sm font-semibold text-[#102D23]"
          >
            Your name
          </label>

          <input
            id="player-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Enter your name"
            maxLength={40}
            autoComplete="given-name"
            autoFocus
            aria-invalid={Boolean(error)}
            className="w-full rounded-xl border border-[#D5E5DB] bg-white px-4 py-3.5 text-sm text-[#102D23] outline-none transition placeholder:text-gray-400 focus:border-[#087653] focus:ring-4 focus:ring-[#087653]/10"
          />

          {error && (
            <p className="mt-2 text-xs font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#006B45] px-5 py-4 text-sm font-bold text-white transition duration-200 hover:bg-[#004F34] hover:shadow-lg active:scale-[0.98]"
          >
            Proceed to Quiz
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-400">
          Ready to test your NYSC knowledge?
        </p>
      </div>
    </div>
  );
}

export default PopUp;