import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ui/ProjectGrid";

/**
 * Página principal del portfolio de Marcela Borgarello.
 * Estética minimalista dark mode con componentes reactivos y Bento Grid.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <div className="pb-20">
        <ProjectGrid />
      </div>
    </main>
  );
}
