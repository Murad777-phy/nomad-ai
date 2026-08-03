import { prompts } from "@/constants/prompts";

export default function ExamplePrompts() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="rounded-full border px-4 py-2 text-sm hover:bg-slate-100 transition"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}