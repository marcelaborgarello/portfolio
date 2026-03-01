import React from 'react';
import { Heart, Sparkles, Code2, Rocket } from 'lucide-react';
import { AnimateIn } from './ui/AnimateIn';

/**
 * Componente AboutMe.
 * Rediseñado como Server Component para Next.js 15.
 * La animación se delega al componente AnimateIn (Client Component).
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
                    <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                        40 años de <span className="text-blue-500">ADN comercial</span> aplicados al desarrollo de software moderno.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 text-lg leading-relaxed">
                        <p>
                            Mi pericia no viene solo de los libros, sino de gestionar negocios desde los 12 años. Soy Perito Mercantil de formación y desarrolladora por vocación de impacto.
                            Traduzco décadas de intuición en ventas y gestión en código robusto con <span className="text-zinc-200 font-bold underline decoration-blue-500/30">Next.js</span> y <span className="text-zinc-200 font-bold underline decoration-purple-500/30">Bun</span>.
                        </p>
                        <p>
                            Creo en el software pragmático que resuelve cuellos de botella reales. Mi enfoque es construir herramientas que yo misma hubiera querido tener en mis propios negocios: eficientes, estables y sin fricciones.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    {[
                        { icon: <Sparkles className="w-4 h-4 text-yellow-400" />, label: "IA-Driven Development" },
                        { icon: <Code2 className="w-4 h-4 text-blue-400" />, label: "Clean Code Argentina" },
                        { icon: <Rocket className="w-4 h-4 text-purple-400" />, label: "Full Stack Developer" }
                    ].map((trait, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-bold text-zinc-300">
                            {trait.icon}
                            {trait.label}
                        </div>
                    ))}
                </div>
            </AnimateIn>
        </section>
    );
};
