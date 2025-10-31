import Link from "next/link";

import { NavItem } from "@/src/components/nav-item";
import { Button } from "@/src/components/ui/button";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-5 ">
        <span
          className="font-heading text-3xl pl-10 font-extrabold bg-gradient-to-r
         from-orange-500 to-gray-700 bg-clip-text text-transparent animate-pulse"
        >
          Rafael Farsura
        </span>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-primary bg-gradient-to-r from-orange-500 to-primary/60 bg-clip-text animate-pulse"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <circle r="3" cx="12" cy="12" />
          <path d="M17 8.5l-5-2.5" />
          <path d="M7 8.5l5-2.5" />
          <path d="M12 17v-5" />
        </svg>
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          <NavItem
            href="#projetos"
            label="Projetos"
            className="hover:animate-pulse hover:text-lg"
          />
          <NavItem
            href="/api/cv"
            label="Baixar CV"
            className="hover:animate-pulse hover:text-lg"
          />
          <Button
            asChild
            className="group bg-orange-500 text-white hover:text-lg hover:bg-gradient-to-tr
            hover:from-orange-500 hover:to-gray-700 hover:text-white hover:animate-pulse"
          >
            <Link href="http://wa.me/5511955003873" className="cursor-pointer">
              Contato
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
