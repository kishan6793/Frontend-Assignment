export default function Result({ score, onRestart }) {
  return (
    <div className="w-full h-screen bg-[#E9F5F7] flex flex-col items-center justify-center text-center select-none">

      {/* Top Button */}
      <button
        className="px-6 py-2 bg-white rounded-md shadow-sm text-[#15313D] font-medium text-sm mb-8"
      >
        Keep Learning!
      </button>

      {/* Title */}
      <h1
        className="
          text-[48px] 
          md:text-[54px]
          font-[DM Serif Display]
          italic
          text-[#1B4965]
        "
      >
        Your Final score is
      </h1>

      {/* Score */}
      <div className="flex items-start justify-center mt-2">
        <span className="text-[140px] leading-none font-[DM Serif Display] italic text-[#1B4965]">
          {score}
        </span>
        <span className="text-[40px] mt-4 font-[DM Serif Display] italic text-[#1B4965]">%</span>
      </div>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="
          mt-10 px-8 py-3
          bg-[#D7EEF7]
          shadow-sm
          rounded-md
          text-[#15313D]
          text-lg
          font-medium
          hover:bg-[#c8e7f0]
          transition-all
        "
      >
        Start Again
      </button>
    </div>
  );
}
