import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { ContactSection } from "@/components/ContactSection";

/**
 * Página principal del portfolio de Marcela Borgarello.
 * Estética minimalista dark mode con componentes reactivos y Bento Grid.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <ProjectGrid />
      <ContactSection />
    </main>
  );
}
