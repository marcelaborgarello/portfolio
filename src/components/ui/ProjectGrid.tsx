'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Package, BookOpen, Code, Database, ChevronRight, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

/**
 * Componente ProjectGrid.
 * Layout Bento Grid con descripciones técnicas enriquecidas (Senior Technical Writing).
 */
export const ProjectGrid = () => {
    const certifications = [
        { title: 'Web Foundations', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/mod-0', icon: <BookOpen className="w-4 h-4" /> },
        { title: 'React Specialist', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/web-1', icon: <Code className="w-4 h-4" /> },
        { title: 'Backend Developer', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/dev-1', icon: <Database className="w-4 h-4" /> },
    ];

    const skills = [
        { name: 'JS', icon: <Code className="w-4 h-4" /> },
        { name: 'TS', icon: <Cpu className="w-4 h-4" /> },
        { name: 'React', icon: <Layers className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Package className="w-4 h-4" /> },
        { name: 'Node', icon: <Database className="w-4 h-4" /> },
        { name: 'Bun', icon: <Cpu className="w-4 h-4" /> },
    ];

    const cardVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        hover: { scale: 1.01, transition: { duration: 0.2 } },
    };

    const gradientBorderStyle = "p-[1px] rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300";

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
            <h2 className="text-3xl font-black text-white tracking-tight border-l-4 border-blue-500 pl-6 mb-12">Proyectos Destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

                {/* Ginialym Card - Featured Project (SaaS ERP/POS) */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="md:col-span-3 p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 shadow-2xl"
                >
                    <div className="w-full h-full rounded-[23px] bg-[#0A0A0A] p-8 md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden relative">
                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] block mb-1">Caso de Estudio</span>
                                    <h3 className="text-4xl font-black text-white tracking-tighter">Ginialym</h3>
                                </div>
                            </div>

                            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                                Plataforma integral de gestión comercial diseñada para escalar negocios en el complejo ecosistema impositivo argentino.
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <li className="flex gap-3 text-zinc-300">
                                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Automatización Fiscal:</strong> Facturación ARCA (A, B, C) en tiempo real, reduciendo ciclos manuales en un 70%.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <Layers className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Ecosistema de Pagos:</strong> Integración de Mercado Pago con conciliación automática de ventas.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <Cpu className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Arquitectura Serverless:</strong> Alta disponibilidad con AWS, garantizando latencias mínimas en POS.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <Database className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Stock Real-time:</strong> Sincronización multicanal mediante WebSockets para evitar quiebres.</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {["Next.js 15", "React 19", "AWS", "Bun", "AFIP Integration", "Mercado Pago"].map(badge => (
                                    <span key={badge} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-zinc-800">{badge}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-6">
                                <a href="https://ginialym.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                                    <ExternalLink className="w-5 h-5" /> Ver Demo Online
                                </a>
                                <span className="text-zinc-500 text-xs font-bold border-l border-zinc-800 pl-4 py-2 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> Repo Privado
                                </span>
                            </div>
                        </div>
                        <Layers className="absolute -bottom-20 -right-20 w-96 h-96 opacity-[0.05] -rotate-12" />
                    </div>
                </motion.div>

                {/* arca-sdk Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="md:col-span-2 p-[1px] rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-orange-500/50 hover:to-red-500/50 transition-all duration-300"
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between gap-8 h-[360px] overflow-hidden relative">
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                                    <Package className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-black uppercase tracking-wider">Featured Open Source</span>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight">arca-sdk</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Abstracción de servicios fiscales SOAP/WSDL nativos de AFIP hacia una API moderna y tipada para Node.js.
                                Reduce el tiempo de integración de semanas a días.
                            </p>
                            <div className="flex gap-2 text-[10px] font-bold text-zinc-500">
                                <span>#NodeJS</span> <span>#TypeScript</span> <span>#OpenSource</span>
                            </div>
                        </div>
                        <a href="https://github.com/marcelaborgarello/arca-sdk" target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-white text-sm font-black hover:bg-zinc-700 transition-colors z-10 border border-zinc-700">
                            <Github className="w-4 h-4" /> GitHub Repo
                        </a>
                        <Github className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.03]" />
                    </div>
                </motion.div>

                {/* Pull Shark Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between h-[360px]">
                        <div className="space-y-4">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black text-white">Pull Shark 🦈</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Mi pequeño homenaje al espíritu colaborativo. Un recordatorio de mi compromiso con la calidad y el envío constante de código en la comunidad.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-center">
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">NPM Package Easter Egg</span>
                        </div>
                    </div>
                </motion.div>

                {/* Especializaciones */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-6">
                        <h3 className="text-lg font-black text-white tracking-tight uppercase tracking-widest text-zinc-500 text-xs">Formación Senior</h3>
                        <div className="flex flex-col gap-2">
                            {certifications.map((cert) => (
                                <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="group/item flex items-center justify-between p-3 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-zinc-800 text-blue-400">{cert.icon}</div>
                                        <span className="text-xs font-bold text-zinc-400 group-hover/item:text-white transition-colors">{cert.title}</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-blue-400 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="md:col-span-2 p-[1px] rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-300"
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-6">
                        <h3 className="text-lg font-black text-white uppercase tracking-widest text-zinc-500 text-xs">Principal Tech Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-800/50 border border-zinc-800 hover:border-purple-500/30 transition-all">
                                    <div className="text-purple-400 p-2 bg-zinc-900 rounded-lg">{skill.icon}</div>
                                    <span className="text-xs font-black text-zinc-200 uppercase tracking-widest">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
