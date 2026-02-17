import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full">
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row gap-16">
        {/* MAPA */}
        <div className="flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.322315079903!2d-49.329938899999995!3d-16.8103589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef95da393674f%3A0x850e4c80f24d6137!2sMelodia%20musical%20Loja%20de%20Instrumentos%20Musicais%20e%20%C3%A1udio!5e0!3m2!1spt-BR!2sbr!4v1771349624736!5m2!1spt-BR!2sbr"
            className="w-full h-[350px] md:h-[400px] rounded-xl border-0 shadow-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa mostrando a localização da Melodia Musical"
          />
        </div>

        {/* CONTATO */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-blue-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Contato
          </span>

          <h2 className="text-3xl font-bold mb-8">Fale conosco!</h2>

          <div className="flex flex-col gap-6 w-full">
            {/* WhatsApp */}
            <div className="flex items-center justify-center md:justify-start gap-4 group">
              <Phone className="text-blue-500" size={22} />
              <Link
                href="https://wa.me/5562991647204"
                target="_blank"
                className="transition-colors duration-300 group-hover:text-blue-500"
              >
                (62) 99164-7204
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-4 group">
              <Mail className="text-blue-500" size={22} />
              <Link
                href="mailto:contato@melodiamusical.com.br"
                className="transition-colors duration-300 group-hover:text-blue-500"
              >
                contato@melodiamusical.com.br
              </Link>
            </div>

            {/* Endereço */}
            <div className="flex items-start justify-center md:justify-start gap-4 group">
              <MapPin className="text-blue-500 mt-1" size={22} />
              <Link
                href="https://maps.app.goo.gl/VXYDa9wCtbsWSPKV8"
                target="_blank"
                className="transition-colors duration-300 group-hover:text-blue-500 leading-relaxed"
              >
                Av. Central, Qd 12 - Lt 18 - Jardim Tiradentes <br />
                Aparecida de Goiânia - GO, 74961-200
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-slate-950 text-slate-400 text-center py-6 text-sm">
        &copy; 2026 Melodia Musical Loja de Instrumentos Musicais e Áudio. Todos
        os direitos reservados. Site desenvolvido por{" "}
        <Link
          href="https://www.pauloadson.com.br/"
          target="_blank"
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          Paulo Adson
        </Link>
      </div>
    </footer>
  );
}
