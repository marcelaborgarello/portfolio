'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Package, BookOpen, Code, Database, ChevronRight, Cpu, Layers } from 'lucide-react';

/**
 * Componente ProjectGrid.
 * Layout Bento Grid con micro-interacciones y bordes con gradiente.
 * Resalta GINIALYM como proyecto destacado e incluye tarjeta de Skills.
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
        hover: { scale: 1.02, transition: { duration: 0.2 } },
    };

    const gradientBorderStyle = "p-[1px] rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300";

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

                {/* arca-sdk Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                                    <Package className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-wider">npm package</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">arca-sdk</h3>
                            <p className="text-zinc-400 text-sm">SDK Open Source para facturación AFIP. Simplificando la integración fiscal en Argentina.</p>
                        </div>
                        <a href="https://github.com/marcelaborgarello/arca-sdk" target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 text-white text-sm font-bold hover:bg-zinc-700 transition-colors z-10">
                            <Github className="w-4 h-4" /> GitHub Repo
                        </a>
                        <Github className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5" />
                    </div>
                </motion.div>

                {/* Ginialym Card - Featured Project */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="md:col-span-2 p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-blue-500/10"
                >
                    <div className="w-full h-full rounded-[23px] bg-[#0A0A0A] p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Featured Project</span>
                                </div>
                                <span className="text-zinc-500 text-xs font-medium bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700">Repo Privado 🔒</span>
                            </div>
                            <h3 className="text-3xl font-extrabold text-white tracking-tight">Ginialym</h3>
                            <p className="text-zinc-400 text-base max-w-lg leading-relaxed">SaaS ERP/POS de alto rendimiento diseñado para el mercado argentino. Gestión avanzada, facturación ARCA y pagos con Mercado Pago.</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["SaaS", "Next.js 15", "AWS", "AFIP Integration"].map(badge => (
                                    <span key={badge} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-tighter border border-zinc-700">{badge}</span>
                                ))}
                            </div>
                        </div>
                        <a href="https://ginialym.com/" target="_blank" rel="noopener noreferrer" className="w-fit flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 z-10">
                            <ExternalLink className="w-4 h-4" /> Ver Demo Online
                        </a>
                        <Layers className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.03]" />
                    </div>
                </motion.div>

                {/* Especializaciones Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-white tracking-tight">Formación Senior</h3>
                        <div className="flex flex-col gap-2">
                            {certifications.map((cert) => (
                                <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="group/item flex items-center justify-between p-3 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-zinc-800 text-blue-400">{cert.icon}</div>
                                        <span className="text-xs font-medium text-zinc-400 group-hover/item:text-white transition-colors">{cert.title}</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-blue-400 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Skills Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-white tracking-tight">Tech Stack</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 p-2 rounded-xl bg-zinc-800/50 border border-zinc-800">
                                    <div className="text-purple-400">{skill.icon}</div>
                                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* More Projects / Placeholder Card */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={gradientBorderStyle}
                >
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col items-center justify-center text-center gap-4">
                        <div className="p-4 rounded-[30px] bg-zinc-800/50 text-zinc-500">
                            <Cpu className="w-10 h-10" />
                        </div>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Más por venir</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
