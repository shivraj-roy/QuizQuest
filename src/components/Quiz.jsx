import { useCallback, useState } from "react";
import QUESTIONS from "../../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
   const [userAnswers, setUserAnswers] = useState([]);

   const activeQuestionIndex = userAnswers.length;

   const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

   const handleSelectedAns = useCallback((ans) => {
      setUserAnswers((prev) => {
         return [...prev, ans];
      });
   }, []);

   if (quizIsComplete) {
      return (
         <div id="summary">
            <img src={QuizCompleteImg} alt="Quiz Completed..." />
            <h2>Quiz is completed...</h2>
         </div>
      );
   }

   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
   shuffledAnswers.sort(() => Math.random() - 0.5);

   return (
      <div id="quiz">
         <div id="question">
            <QuestionTimer
               key={activeQuestionIndex}
               timer={3000}
               onTimeout={() => handleSelectedAns(null)}
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
               {shuffledAnswers.map((ans) => {
                  return (
                     <li className="answer" key={ans}>
                        <button onClick={() => handleSelectedAns(ans)}>
                           {ans}
                        </button>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
