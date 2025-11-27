export default function QuestionBox({ number, question }) {
  return (
    <div className="absolute w-[896px] h-[78px] left-1/2 top-[463px] -translate-x-1/2
                    rounded-[10px] border border-[#96E5FF]
                    bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
                    flex items-center justify-center">
      <p className="font-inter font-semibold text-[22px] text-[#15313D]">
        {number}. {question}
      </p>
    </div>
  );
}


// export default function QuestionBox({ index, question }) {
//   return (
//     <div
//       className="
//         w-[896px] h-[78px]
//         bg-[#C6E9F7]
//         border border-[#96E5FF]
//         rounded-[10px]
//         flex items-center justify-center
//         text-[22px] font-semibold text-[#15313D]
//       "
//     >
//       {index + 1}. {question}
//     </div>
//   );
// }
