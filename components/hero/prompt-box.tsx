"use client";

import { useState } from "react";
import ExamplePrompts from "./example-prompts";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="mt-12 w-full">

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Tell me about your dream trip..."
        className="h-52 w-full rounded-3xl border border-slate-300 p-6 text-lg outline-none transition focus:border-black"
      />

      <button className="mt-6 rounded-2xl bg-black px-8 py-4 font-semibold text-white hover:bg-slate-800 transition">
        Discover My Destination →
      </button>

      <ExamplePrompts />

    </div>
  );
}