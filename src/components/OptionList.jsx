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
