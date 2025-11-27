// export default function OptionList({ options, selected, onSelect }) {
//   return (
//     <div className="absolute left-1/2 -translate-x-1/2 top-[555px]
//                     w-[897px] flex flex-col gap-[14px]">

//       {options.map((op) => (
//         <button
//           key={op}
//           onClick={() => onSelect(op)}
//           className={`w-[896px] h-[78px] rounded-[10px] border border-[rgba(150,229,255,0.5)]
//                      bg-[linear-gradient(89.72deg,rgba(198,233,247,0.1)_0.09%,rgba(229,248,255,0.1)_99.91%)]
//                      flex items-center justify-center
//                      font-inter text-[22px]
//                      ${selected === op ? "font-bold bg-[#dff6ff]" : ""}`}
//         >
//           {op}
//         </button>
//       ))}

//     </div>
//   );
// }


import Option from "./Option";

export default function OptionList({ options, selectedIndex, onSelect }) {
  return (
    <div className="mt-6 space-y-4">
      {options.map((opt, i) => (
        <Option
          key={i}
          text={opt}
          isSelected={selectedIndex === i}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
