import PromptBox from "./prompt-box";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
        Find your next adventure.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        Tell us about your dream trip and we'll recommend destinations tailored
        to you.
      </p>

      <PromptBox />

    </section>
  );
}