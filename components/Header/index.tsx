import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const links = [{ displayName: "Folha do dia", href: "/daily-sheet" }];

export function Header() {
  const { theme } = useTheme();
  return (
    <header className="flex justify-between items-center py-9 px-5 md:px-0">
      <Link href={"/"} className="flex space-x-2 items-center">
        <Image
          src={theme === "light" ? "" : ""}
          width={36}
          height={36}
          alt="logo"
          priority
        />
        <div className="text-2x1">
          Folha do <span className="font-bold text-[#8e2424]">CODEFAS</span>
        </div>
      </Link>

      <div className="flex space-x-10">
        <nav className="space-x-10">
          {links.map((l, idx) => (
            <Link href={l.href} key={idx}>
              {l.displayName}
            </Link>
          ))}
        </nav>
        <button className="focus:outline-none" aria-label="Toggle theme">
          <Image
            src={theme === "light" ? "" : ""}
            alt="Theme toogle"
            width={48}
            height={28}
            priority
          />
        </button>
      </div>
    </header>
  );
}
