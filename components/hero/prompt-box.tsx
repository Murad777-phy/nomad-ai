"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import ExamplePrompts from "./example-prompts";
import { useRouter } from "next/navigation";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  return (
    <div className="mt-14 w-full max-w-4xl">

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 focus-within:border-emerald-500 focus-within:shadow-xl">

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your dream trip...

Examples:
• I have a $2,500 budget
• I love mountains and lakes
• Somewhere warm in November
• I want great food"
          className="min-h-[220px] resize-none border-0 bg-transparent px-7 py-7 text-lg shadow-none focus-visible:ring-0"
        />

        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">

          <p className="text-sm text-slate-500">
            Press ⌘ + Enter to search
          </p>

          <button
            onClick={() => router.push("/chat")}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
            Discover →
          </button>

        </div>

      </div>

      <ExamplePrompts />

    </div>
  );
}