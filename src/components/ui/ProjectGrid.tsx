'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Lock, Package, BookOpen, Code, Database, ChevronRight, Cpu, Layers, ShieldCheck, Zap, Monitor, Settings, Award, Sparkles } from 'lucide-react';

/**
 * Componente ProjectGrid.
 * Layout Bento Grid optimizado para Next.js 15.
 * Usa next/link y next/image para performance y SEO.
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
            <div className="flex flex-col gap-2">
                <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em] ml-1">Work</span>
                <h2 className="text-4xl font-black text-white tracking-tighter">Proyectos Destacados</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

                {/* Ginialym Card - Case Study */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="md:col-span-3 p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 shadow-2xl"
                >
                    <div className="w-full h-full rounded-[23px] bg-[#0A0A0A] p-8 md:p-12 flex flex-col lg:flex-row gap-12 overflow-hidden relative">
                        {/* Background Decorator Image */}
                        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-30 pointer-events-none grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/images/projects/ginialym-dashboard.png"
                                alt="Ginialym Dashboard Preview"
                                fill
                                className="object-cover object-left"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                        </div>

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] block mb-1">Building in Public</span>
                                    <h3 className="text-4xl font-black text-white tracking-tighter italic lg:text-5xl">Ginialym</h3>
                                </div>
                            </div>

                            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                                El sistema que nació en el mostrador de una verdulería. Un proyecto en desarrollo activo para simplificar la complejidad fiscal (ARCA) y los cobros digitales con una arquitectura viva.
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-4">
                                <li className="flex gap-3 text-zinc-300">
                                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Núcleo ARCA/AFIP:</strong> Facturación electrónica (A, B, C) con soporte para puntos de venta múltiples.</span>
                                </li>
                                <li className="flex gap-3 text-zinc-300">
                                    <Layers className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span><strong>Pagos Mercado Pago:</strong> Integración fluida con conciliación automática de ventas.</span>
                                </li>
                            </ul>

                            {/* Visual Captions suggested based on screenshots */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4 backdrop-blur-sm">
                                    <Monitor className="w-5 h-5 text-zinc-500 mt-1" />
                                    <p className="text-[11px] text-zinc-400 leading-tight">
                                        <span className="text-zinc-200 block font-bold mb-1">Dashboard Real-time</span>
                                        Arqueo de caja y métricas diarias accesibles en Dark/Light mode con diseño optimizado para POS.
                                    </p>
                                </div>
                                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-4 backdrop-blur-sm">
                                    <Settings className="w-5 h-5 text-zinc-500 mt-1" />
                                    <p className="text-[11px] text-zinc-400 leading-tight">
                                        <span className="text-zinc-200 block font-bold mb-1">Configuración Fiscal</span>
                                        Panel administrativo para vinculación CSR y gestión técnica de certificados ARCA simplificada.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6">
                                {["Next.js 15", "React 19", "AWS", "Bun", "AFIP Integration", "Mercado Pago"].map(badge => (
                                    <span key={badge} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-zinc-800">{badge}</span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-10">
                                <Link
                                    href="https://ginialym.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-zinc-800 text-white font-black hover:bg-zinc-700 transition-all shadow-xl active:scale-95 group border border-zinc-700"
                                >
                                    Ver Progreso <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <span className="text-zinc-500 text-xs font-bold flex items-center gap-2 border-zinc-800">
                                    <Sparkles className="w-4 h-4 text-blue-400" /> Desarrollo Activo
                                </span>
                            </div>
                        </div>
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
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between gap-8 h-[380px] overflow-hidden relative">
                        {/* Background Decorator Image */}
                        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 grayscale pointer-events-none">
                            <Image
                                src="/images/projects/ginialym-arca.png"
                                alt="ARCA Config Preview"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                                    <Package className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-black uppercase tracking-wider">Featured Open Source</span>
                            </div>
                            <h3 className="text-3xl font-black text-white tracking-tighter">arca-sdk</h3>
                            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                                SDK para Node.js que abstrae la burocracia de los web services nativos de AFIP/ARCA, ofreciendo una API tipada y moderna.
                            </p>
                            <div className="flex gap-3 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                <span>#NodeJS</span> <span>#TypeScript</span> <span>#WSDL</span>
                            </div>
                        </div>
                        <Link
                            href="https://github.com/marcelaborgarello/arca-sdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-800 text-white text-sm font-black hover:bg-zinc-700 transition-colors z-10 border border-zinc-700 shadow-xl group"
                        >
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> GitHub Repository
                        </Link>
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
                    <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between h-[380px] relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tighter">Pull Shark 🦈</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Distinción de GitHub por contribuciones constantes a la comunidad. El código no es solo trabajo, es una forma de impacto colectivo.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-800/40 border border-zinc-800 text-center">
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Git Collaborator</span>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
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
                        <h3 className="text-lg font-black text-white tracking-tight uppercase tracking-widest text-zinc-500 text-xs text-center md:text-left">Formación Senior</h3>
                        <div className="flex flex-col gap-2">
                            {certifications.map((cert) => (
                                <Link
                                    key={cert.title}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/item flex items-center justify-between p-3 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-zinc-800 text-blue-400">{cert.icon}</div>
                                        <span className="text-xs font-bold text-zinc-400 group-hover/item:text-white transition-colors">{cert.title}</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/item:text-blue-400 transition-all" />
                                </Link>
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
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
