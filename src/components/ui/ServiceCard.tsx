import { ReactNode } from "react";
import Button from "@/components/ui/Button";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
};

export default function ServiceCard({
  icon,
  title,
  buttonText,
  buttonHref,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
        p-8
        flex flex-col items-center text-center
        gap-6
        ${className}
      `}
    >
      {/* Ícone */}
      <div
        className="
        w-16 h-16
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br from-blue-500 to-indigo-600
        text-white text-2xl
        shadow-lg shadow-indigo-500/30
      "
      >
        {icon}
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>

      {/* Botão */}
      <Button
        href={buttonHref}
        text={buttonText}
        className="
          bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-blue-600 hover:to-indigo-700
          shadow-md shadow-indigo-500/30
        "
      />
    </div>
  );
}
