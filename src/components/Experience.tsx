import React from 'react';
import { Briefcase, Calendar, Award, Zap } from 'lucide-react';
import { AnimateIn } from './ui/AnimateIn';

/**
 * Componente Experience.
 * Rediseñado como Server Component para Next.js 15.
 * Las animaciones se delegan a AnimateIn.
 */
export const Experience = () => {
    const experiences = [
        {
            title: "SaaS Architect & Founder",
            company: "Ginialym",
            period: "2022 — Actualidad",
            description: "Diseño y escalado de una arquitectura multi-tenant para el mercado argentino. Implementación de núcleos de facturación críticos y automatización de procesos operativos para pymes.",
            impact: "Mantenimiento de uptime del 99.9% y reducción de carga operativa en un 70% para clientes activos."
        },
        {
            title: "Full-Stack Developer & Freelance",
            company: "Proyectos Independientes",
            period: "2019 — 2022",
            description: "Desarrollo de MVPs para startups y soluciones de automatización para empresas locales. Foco en React, Node.js e integraciones de terceros (Mercado Pago, Logistics APIs).",
            impact: "Entregas exitosas de +10 productos digitales desde concepto hasta producción."
        }
    ];

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <div className="space-y-12">
                <div className="flex items-center gap-4 text-purple-500">
                    <Briefcase className="w-6 h-6 border-b-2 border-purple-500" />
                    <h2 className="text-xl font-black uppercase tracking-[0.3em]">Experiencia Profesional</h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <AnimateIn
                            key={i}
                            delay={i * 0.1}
                            className="relative pl-8 border-l border-zinc-900 overflow-hidden"
                        >
                            <div className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent" />
                            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                            <div className="space-y-3">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                    <h3 className="text-2xl font-black text-white tracking-tight">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800 w-fit">
                                        <Calendar className="w-3 h-3 text-purple-500" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-purple-400 font-black text-xs uppercase tracking-widest">{exp.company}</p>
                                <p className="text-zinc-400 leading-relaxed text-base">{exp.description}</p>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 group">
                                    <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-1 animate-pulse" />
                                    <p className="text-zinc-300 text-sm font-bold">
                                        <span className="text-white uppercase text-[10px] tracking-widest block mb-1">Impacto Destacado:</span>
                                        {exp.impact}
                                    </p>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
