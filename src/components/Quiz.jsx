import { useState } from "react";
import QUESTIONS from "../../questions.js";

export default function Quiz() {
   const [userAnswers, setUserAnswers] = useState([]);

   const activeQuestionIndex = userAnswers.length;

   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
   shuffledAnswers.sort(() => Math.random() - 0.5);

   const handleSelectedAns = (ans) => {
      setUserAnswers((prev) => {
         return [...prev, ans];
      });
   };

   return (
      <div id="quiz">
         <div id="question">
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
