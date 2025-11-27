function SubmitButton({ onSubmit }) {
  return (
    <button
      onClick={onSubmit}
      className="
        w-[120px] h-[48px]
        bg-[#D4EEF9]
        text-[#15313D]
        text-[18px] font-semibold
        rounded-[10px]
        shadow-sm
        hover:bg-[#c7e9f7]
        transition
        
      "
    >
      Submit
    </button>
  );
}

export default SubmitButton;