export default function Option({ text, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-[896px] h-[78px]
        flex items-center justify-center
        rounded-[10px]
        text-[22px] font-semibold
        cursor-pointer
        border transition-all duration-200

        ${
          isSelected
            ? "bg-[#C6E9F7] border-[#96E5FF] text-[#15313D]"
            : "bg-[rgba(198,233,247,0.10)] border-[rgba(150,229,255,0.50)] text-[#15313D] hover:bg-[#E5F8FF]"
        }
      `}
    >
      {text}
    </div>
  );
}
