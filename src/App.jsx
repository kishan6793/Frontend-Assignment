// // import React from "react";
// // import FrostedCard from "./components/FrostedCard";
// // import PawNote from "./components/PawNote";
// // import Ellipses from "./components/Ellipses";

// // export default function App() {
// //   return (
// //     <div className="relative w-[1920px] h-[1080px] mx-auto overflow-hidden 
// //                     bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)]">

// //       <Ellipses />

// //       <div className="absolute left-1/2 top-[80px] -translate-x-1/2">
// //         <FrostedCard />
// //       </div>

// //       <PawNote />
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import Quiz from "./components/Quiz";
// import Result from "./components/Result";
// import { questions } from "./data/questions";

// export default function App() {
//   const [current, setCurrent] = useState(0); // question index
//   const [selected, setSelected] = useState({});
//   const [showResult, setShowResult] = useState(false);

//   const handleNext = () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handlePrev = () => {
//     if (current > 0) {
//       setCurrent(current - 1);
//     }
//   };

//   const handleSelect = (option) => {
//     setSelected({ ...selected, [current]: option });
//   };

//   const score = Object.keys(selected).reduce((acc, index) => {
//     return selected[index] === questions[index].answer ? acc + 1 : acc;
//   }, 0);

//   if (showResult) {
//     return <Result score={score} total={questions.length} />;
//   }

//   return (
//     <Quiz
//       data={questions[current]}
//       index={current}
//       total={questions.length}
//       selected={selected[current]}
//       onSelect={handleSelect}
//       onNext={handleNext}
//       onPrev={handlePrev}
//     />
//   );
// }



import { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questions from "./data/questions";


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
          q={questions[current]}
          current={current}
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
