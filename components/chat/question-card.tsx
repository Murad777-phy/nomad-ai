interface QuestionCardProps {
  question: string;
  options: string[];
  onSelect: (value: string) => void;
}

export default function QuestionCard({
  question,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold">
        {question}
      </h2>

      <div className="grid gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}