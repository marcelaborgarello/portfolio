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
                        De <span className="text-blue-500">Río Cuarto</span> al mundo SaaS, construyendo soluciones que resuelven problemas reales.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 text-lg leading-relaxed">
                        <p>
                            Soy la "madre" de <span className="text-zinc-200 font-bold underline decoration-blue-500/30">Ginialym</span> y <span className="text-zinc-200 font-bold underline decoration-purple-500/30">arca-sdk</span>.
                            Mi pasión es aplicar **IA y arquitecturas modernas** para simplificar el complejo ecosistema fiscal y operativo argentino.
                        </p>
                        <p>
                            Creo en el <span className="italic">clean code</span> como una forma de respeto al equipo, y en <span className="text-orange-500 font-bold">Bun 🔥</span> como el estándar de performance.
                            Busco que mi código sea robusto por dentro y absurdamente simple por fuera.
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
