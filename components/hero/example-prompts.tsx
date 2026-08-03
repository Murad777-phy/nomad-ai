import { prompts } from "@/constants/prompts";

export default function ExamplePrompts() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">

      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50"
        >
          {prompt}
        </button>
      ))}

    </div>
  );
}