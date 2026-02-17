import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
  target?: string;
};

export default function Button({
  href = "/",
  target = "_blank",
  className = "",
  text,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`
        inline-flex items-center justify-center
        px-10 py-4
        font-semibold text-sm
        rounded-xl
        text-white
        bg-gradient-to-r from-blue-500 to-indigo-600
        shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className}
      `}
    >
      {text}
    </Link>
  );
}
