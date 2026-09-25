import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { ContactFooter } from "@/components/ContactFooter";

/**
 * Página principal del portfolio de Marcela Borgarello.
 * Modo oscuro; secciones: portada, sobre mí, experiencia, proyectos y contacto.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Experience />
      <ProjectGrid />
      <ContactFooter />
    </main>
  );
}
