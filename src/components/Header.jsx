import LOGO from "../assets/quiz-logo.png";

export default function Header() {
   return (
      <header>
         <img src={LOGO} alt="QuizQuest LOGO..." />
         <h1>QuizQuest</h1>
      </header>
   );
}
