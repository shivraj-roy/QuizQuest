import { useState, useEffect } from "react";

export default function QuestionTimer({ timer, onTimeout }) {
   const [remainingTime, setRemainingTime] = useState(timer);

   useEffect(() => {
      const timerId = setTimeout(onTimeout, timer);
      const intervalId = setInterval(() => {
         setRemainingTime((prev) => prev - 100);
      }, 100);

      return () => {
         clearTimeout(timerId);
         clearInterval(intervalId);
      };
   }, [timer, onTimeout]);

   return <progress id="question-time" max={timer} value={remainingTime} />;
}
