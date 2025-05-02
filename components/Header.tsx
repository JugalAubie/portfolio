import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
