import React from 'react';
import { Heart } from 'lucide-react';
import { AnimateIn } from './ui/AnimateIn';

/**
 * Sección "Sobre mí".
 * Server Component; la animación la maneja AnimateIn.
 */
export const AboutMe = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <AnimateIn className="space-y-8">
                <div className="flex items-center gap-4 text-blue-500">
                    <Heart className="w-6 h-6 fill-current" />
                    <h2 className="text-xl font-black uppercase tracking-[0.3em]">Sobre mí</h2>
                </div>

                <div className="space-y-6">
                    <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter">
                        Soy perito mercantil y hace unos 6 años que estudio programación. Lo que construyo sale de problemas que viví detrás del mostrador: arqueos que no cierran, cobros que no aparecen, remitos escritos a mano.
                    </p>

                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Trabajo con agentes de IA de una forma concreta: yo defino qué hay que hacer, reviso el plan antes de que se toque una línea y valido el resultado contra casos reales de mis negocios. La IA escribe el código; las decisiones y la revisión son mías.
                    </p>
                </div>
            </AnimateIn>
        </section>
    );
};
