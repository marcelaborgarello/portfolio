import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";

/**
 * Página principal del portfolio de Marcela Borgarello.
 * Estética minimalista dark mode con componentes reactivos.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <Specializations />
      {/* Próxima sección: Proyectos (Ginialym y arca-sdk) */}
    </main>
  );
}
