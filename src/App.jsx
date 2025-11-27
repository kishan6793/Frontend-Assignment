import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import {questions} from "./data/questions";


export default function App() {
  const [current, setCurrent] = useState(0);                // current question index
  const [selectedAnswers, setSelectedAnswers] = useState({}); // store selected options
  const [showResult, setShowResult] = useState(false);      // toggle result screen

// console.log(questions[current].question);
  // User selects an option
  const handleSelect = (index) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [current]: index,
    }));
  };

  // Next arrow
  const handleNext = () => {
    if (current === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  // Previous arrow
  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  // Restart quiz
  const restart = () => {
    setCurrent(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  // Calculate score
  const score = Math.round(
    (Object.keys(selectedAnswers).filter(
      (i) => selectedAnswers[i] === questions[i].answer
    ).length /
      questions.length) *
      100
  );

  return (
    <div className="w-full min-h-screen bg-[#E9F5F7]">
      {showResult ? (
        <Result score={score} onRestart={restart} />
      ) : (
        <Quiz
          data={questions[current]}
          index={current}
          total={questions.length}
          selected={selectedAnswers[current]}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
