import Container from "@/components/shared/container";
import PromptBox from "./prompt-box";

export default function Hero() {
  return (
    <section className="py-24">

      <Container className="flex flex-col items-center text-center">

        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          AI Travel Planner
        </span>

        <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-tight md:text-7xl">
          Find the destination
          <br />
          you'll actually love.
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-600">
          Stop comparing hundreds of destinations.
          Describe your perfect trip and let AI narrow it down for you.
        </p>

        <PromptBox />

      </Container>

    </section>
  );
}