import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { Guitar, Wrench, Music } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-gradient-to-br from-black to-slate-800 text-white px-6">
        <main className="flex flex-col items-center text-center gap-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforme sua paixão por música em algo extraordinário
          </h1>

          <p className="text-lg text-slate-300">
            Adquira instrumentos musicais e equipamentos de áudio profissional,
            além de aprender com professores experientes que vão elevar seu
            nível ao máximo.
          </p>

          <Button
            href="https://wa.me/5562991647204?text=Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21"
            text="Faça um orçamento conosco!"
          />
        </main>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Nossos Serviços
            </h2>
            <p className="text-slate-600 mt-4">
              Soluções completas para músicos iniciantes e profissionais.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Guitar size={28} />}
              title="Venda de Instrumentos"
              buttonText="Saiba mais"
              buttonHref="https://wa.me/5562991647204?text=Vim%20pelo%20site%20e%20gostaria%20de%20comprar%20um%20instrumento."
            />

            <ServiceCard
              icon={<Wrench size={28} />}
              title="Luthier & Manutenção"
              buttonText="Agendar serviço"
              buttonHref="https://wa.me/5562991647204?text=Vim%20pelo%20site%20e%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Luthier%20e%20Manuten%C3%A7%C3%A3o."
            />

            <ServiceCard
              icon={<Music size={28} />}
              title="Aulas de Música"
              buttonText="Conheça as aulas"
              buttonHref="https://wa.me/5562991647204?text=Vim%20pelo%20site%20e%20gostaria%20de%20ter%20aulas%20de%20m%C3%BAsica."
            />
          </div>
        </div>
      </section>
    </>
  );
}
