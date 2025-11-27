// export default function PawNote() {
//   return (
//     <div className="absolute left-[119.46px] top-[752.69px] flex items-center gap-3">

//       <div className="bg-white px-4 py-2 rounded-xl border border-black/10
//                       font-caveat text-[32px] text-[#15313D] -rotate-[2.56deg]">
//         Best of Luck !
//       </div>

//       <img src="/assets/paw.gif" className="w-[173.45px] h-[173.45px]" />
//     </div>
//   );
// }


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

