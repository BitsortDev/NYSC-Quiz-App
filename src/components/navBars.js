import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NyscLogo from "../assets/nysc-seeklogo.png";
import PopUp from "./popUp";

function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  function handleProceed(name) {
  localStorage.setItem("playerName", name);

  setIsPopupOpen(false);

  navigate("/quiz");
}

  const HandleClick = (e) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname==="/quiz") {
      const confirmLeave = window.confirm(
        "Are you sure you want to leave the quiz? Your progress will be lost."
      );
      if(!confirmLeave) {
        e.preventDefault();
        return;
      }
    }
    navigate('/')
  }
  

  const navLinks = [
    { label: "Home", href: '/', onClick: {HandleClick} },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/process" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5EEE9] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden  sm:h-11 sm:w-11">
            <img src={NyscLogo} alt="NYSC logo" className="h-full w-full object-contain" /> 
          </div>

          <span className="text-base font-extrabold tracking-tight text-[#102D23] sm:text-lg">
            NYSC Quiz
          </span>
        </a>

    
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#34443C] transition-colors duration-200 hover:text-[#087653]"
            >
              {link.label}
            </a>
          ))}

          <button
             type="button"
             onClick={() => setIsPopupOpen(true)}
             className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#006B45] px-6 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004F34] hover:shadow-lg active:translate-y-0"
              >
              Start Quiz
             </button>
        </div>

        
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-[#102D23] transition hover:bg-[#E5F4EC] md:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E5EEE9] bg-white px-5 pb-6 pt-3 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#263B34] transition hover:bg-[#E5F4EC] hover:text-[#087653]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/quiz"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#006B45] px-6 text-sm font-bold text-white transition hover:bg-[#004F34]"
            >
              Start Quiz
              <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
      )}
         <PopUp
             isOpen={isPopupOpen}
             onClose={() => setIsPopupOpen(false)}
             onProceed={handleProceed}
        />
    </header>
  );
}

export default Navbar;