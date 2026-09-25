import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { AnimateIn } from './ui/AnimateIn';

/**
 * Sección de experiencia.
 * Server Component; la animación la maneja AnimateIn.
 */
export const Experience = () => {
    const experiences = [
        {
            title: "Comercio",
            period: "1980 — Actualidad",
            paragraphs: [
                "Trabajo en comercios desde los 12 años. Empecé en los negocios de mis padres, donde ya manejaba proveedores y depósito. Después tuve los míos, entre ellos una verdulería. Desde 2014 tengo Imprenart: empezó con venta online y diseño gráfico, y hoy es mi local, que atiendo desde casa.",
                "Entre 2013 y 2015, además, hice tareas administrativas para dos papeleras, desde casa, como prestadora de servicios y manejando sus sistemas.",
            ],
        },
    ];

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="space-y-12">
                <div className="flex items-center gap-4 text-purple-500">
                    <Briefcase className="w-6 h-6" />
                    <h2 className="text-xl font-black uppercase tracking-[0.3em]">Experiencia</h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <AnimateIn
                            key={exp.title}
                            delay={i * 0.1}
                            className="relative pl-8 border-l border-zinc-900 overflow-hidden"
                        >
                            <div className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent" />
                            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                    <h3 className="text-2xl font-black text-white tracking-tight">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800 w-fit">
                                        <Calendar className="w-3 h-3 text-purple-500" />
                                        {exp.period}
                                    </div>
                                </div>
                                {exp.paragraphs.map((text) => (
                                    <p key={text} className="text-zinc-400 leading-relaxed text-base">{text}</p>
                                ))}
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
