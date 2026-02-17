import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Link href={"/"}>
      <header className="flex justify-center p-8">
        <Image
          className=""
          src="/melodia-musical.svg"
          alt="Next.js logo"
          width={300}
          height={75}
          priority
        />
      </header>
    </Link>
  );
}
