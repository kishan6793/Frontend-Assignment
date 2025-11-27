export default function PawNote() {
  return (
    <div
      className="
        absolute
        left-[60px]
        bottom-[40px]
        flex
        flex-col
        items-center
        pointer-events-none
        select-none
      "
      style={{ width: "150px" }}
    >
      {/* Bubble Note */}
      <img
        src="/assets/pawnote.png"
        alt="Best of Luck"
        className="w-[150px] h-auto mb-[-10px]" 
      />

      {/* Paw GIF */}
      <img
        src="/assets/paw.gif"
        alt="Paw"
        className="w-[120px] h-auto"
      />
    </div>
  );
}

