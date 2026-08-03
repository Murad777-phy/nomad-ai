import Link from "next/link";

import Container from "@/components/shared/container";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Nomad AI
        </Link>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </Container>
    </header>
  );
}
