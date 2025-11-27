export default function ProgressBar({ current }) {
  const positions = [-340, -113, 113, 340]; // exact Figma offsets

  return (
    <div className="absolute w-[896px] h-[20px] left-1/2 top-[410px] -translate-x-1/2">

      {positions.map((pos, i) => (
        <div key={i}>
          {/* base thin line */}
          <div
            className={`
              absolute h-[2px] w-[216px] bg-[#E3E3E3]
              ${i === 0 ? "bg-[#E6E6E6]" : ""}
            `}
            style={{ left: `calc(50% + ${pos}px - 108px)` }}
          />

          {/* active thick bar */}
          {i < current && (
            <div
              className="absolute h-[8px] w-[216px] bg-[#15313D] top-[-3px]"
              style={{ left: `calc(50% + ${pos}px - 108px)` }}  
            />
          )}
          {i == current && (
            <div
              className="
                absolute h-[8px] w-[173px] bg-[#15313D]
                top-[-3px]
              "
              style={{ left: `calc(50% + ${pos}px - 108px)` }}
            />
          )}
          
        </div>
      ))}

    </div>
  );
}
