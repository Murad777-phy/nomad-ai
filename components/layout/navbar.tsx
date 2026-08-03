import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Nomad AI
        </Link>

        <nav className="flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}