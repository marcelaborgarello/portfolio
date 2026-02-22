'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Package, BookOpen, Code, Database, ChevronRight } from 'lucide-react';

/**
 * Componente ProjectGrid.
 * Implementa un layout Bento Grid responsivo para proyectos y certificaciones.
 * Máximo 150 líneas cumpliendo las Reglas de Oro.
 */
export const ProjectGrid = () => {
    const certifications = [
        { title: 'Web Foundations', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/mod-0', icon: <BookOpen className="w-4 h-4" /> },
        { title: 'React Specialist', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/web-1', icon: <Code className="w-4 h-4" /> },
        { title: 'Backend Developer', url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/dev-1', icon: <Database className="w-4 h-4" /> },
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                {/* arca-sdk Card (Grande) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col justify-between group overflow-hidden relative"
                >
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                                <Package className="w-6 h-6" />
                            </div>
                            <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase">npm package</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">arca-sdk</h3>
                        <p className="text-zinc-400 max-w-md">SDK Open Source para integración con servicios AFIP. Simplificando la facturación electrónica en Argentina.</p>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <a href="https://github.com/marcelaborgarello/arca-sdk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-xl bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-colors">
                            <Github className="w-4 h-4" /> Repo
                        </a>
                    </div>
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Github className="w-32 h-32" />
                    </div>
                </motion.div>

                {/* Certificaciones APX Card (Vertical) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="md:col-span-1 row-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col gap-6"
                >
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Especializaciones</h3>
                        <p className="text-zinc-500 text-sm">Formación avanzada en APX School.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {certifications.map((cert) => (
                            <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="group/item flex items-center justify-between p-4 rounded-2xl bg-zinc-800/30 border border-zinc-800/50 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-zinc-800 group-hover/item:bg-blue-500/20 transition-colors">{cert.icon}</div>
                                    <span className="text-sm font-medium text-zinc-300 group-hover/item:text-white transition-colors">{cert.title}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Ginialym Card (Ancha) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 row-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col justify-between group overflow-hidden relative"
                >
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                                <Lock className="w-6 h-6" />
                            </div>
                            <span className="text-zinc-500 text-xs font-semibold">Repo Privado 🔒</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">Ginialym</h3>
                        <p className="text-zinc-400 max-w-lg">SaaS ERP/POS de alto rendimiento. Facturación ARCA, gestión de stock y pagos con Mercado Pago integrados.</p>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <a href="https://ginialym.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                            <ExternalLink className="w-4 h-4" /> Ver Demo
                        </a>
                    </div>
                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Package className="w-64 h-64" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
