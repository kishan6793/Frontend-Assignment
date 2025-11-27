import QuestionBox from "./QuestionBox";
import OptionList from "./OptionList";
import Arrows from "./Arrows";
import ProgressBar from "./ProgressBar";
import PawNote from "./PawNote";

export default function Quiz({
  data,
  index,
  total,
  selected,
  onSelect,
  onNext,
  onPrev,
}) {
  return (
    <div className="relative w-[1920px] h-[1080px] mx-auto 
                    bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)] 
                    overflow-hidden">

      {/* MAIN CONTENT WRAPPER */}
      <div
        className="
          absolute
          w-[1625px]
          h-[920px]
          left-1/2
          top-[80px]
          -translate-x-1/2
          rounded-[50px]
          bg-[linear-gradient(112.86deg,rgba(255,255,255,0.4)_-6.68%,rgba(255,255,255,0.12)_45.63%,rgba(255,255,255,0.4)_103.45%)]
          border border-white/70
          shadow-[0px_43.6px_69px_rgba(0,0,0,0.63)]
          backdrop-blur-[7px]
        "
      >

        {/* Inner White Card */}
        <div className="
          absolute
          w-[1542px]
          h-[856px]
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          bg-[#F4FDFF]
          rounded-[42px]
        "></div>

        {/* TITLE */}
        <h1
          className="
            absolute
            w-[919px]
            h-[102px]
            left-1/2
            -translate-x-1/2
            top-[206px]
            font-dmserif italic
            text-[90px]
            leading-[24px]
            tracking-[-4px]
            flex items-center justify-center
            bg-gradient-to-r from-[#15313D] to-[#3CABDA]
            bg-clip-text text-transparent
            text-center
          "
        >
          Test Your Knowledge
        </h1>

        {/* SUBTITLE */}
        <div className="
          absolute
          w-[422px]
          h-[45px]
          left-1/2
          -translate-x-1/2
          top-[312px]
          bg-white
          rounded-[8px]
          flex items-center justify-center
        ">
          <p className="font-manrope text-[20px] text-[#15313D]">
            Answer all questions to see your results
          </p>
        </div>

        {/* PROGRESS BAR */}
        <ProgressBar current={index} />

        {/* QUESTION */}
        <QuestionBox number={index + 1} question={data.question} />

        {/* OPTIONS */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[555px]">
        <OptionList
            options={data.options}
            selectedIndex={selected}
            onSelect={onSelect}
        />
        </div>

        <PawNote />

        {/* LEFT + RIGHT ARROWS */}
        <Arrows
          onNext={onNext}
          onPrev={onPrev}
          isFirst={index === 0}
          isLast={index === total - 1}
        />

      </div>
    </div>
  );
}
