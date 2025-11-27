export default function Arrows({ onNext, onPrev, isFirst, isLast }) {
  return (
    <div className="absolute left-[1292px] top-[855px] flex gap-[10px]">

      {/* Left Arrow */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`w-[53px] h-[50px] flex items-center justify-center rounded-[10px]
                    bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
                    border border-[rgba(150,229,255,0.05)]
                    ${isFirst ? "opacity-30 cursor-not-allowed" : ""}`}
      >
        <img
          src="/assets/arrow-right.svg"
          className="w-[24px] h-[24px] rotate-180"
        />
      </button>

      {/* Right Side → Arrow or Submit */}
      {isLast ? (
        // SUBMIT BUTTON IN EXACT ARROW POSITION
        <button
          onClick={onNext}
          className="w-[120px] h-[50px] flex items-center justify-center rounded-[10px]
                     bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
                     border border-[rgba(150,229,255,0.05)]
                     text-[#15313D] font-semibold text-[18px]"
        >
          Submit
        </button>
      ) : (
        // NORMAL RIGHT ARROW
        <button
          onClick={onNext}
          className="w-[53px] h-[50px] flex items-center justify-center rounded-[10px]
                     bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
                     border border-[rgba(150,229,255,0.05)]"
        >
          <img
            src="/assets/arrow-right.svg"
            className="w-[24px] h-[24px]"
          />
        </button>
      )}

    </div>
  );
}
