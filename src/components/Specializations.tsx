'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, ChevronRight } from 'lucide-react';

/**
 * Componente de Formación Especializada.
 * Muestra las certificaciones de APX con enlaces directos.
 */
export const Specializations = () => {
    const certifications = [
        {
            title: 'Web Foundations',
            description: 'Arquitectura fundamental de la web y protocolos core.',
            url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/mod-0',
            icon: <BookOpen className="w-5 h-5 text-blue-400" />,
        },
        {
            title: 'React Specialist',
            description: 'Especialización en creación de interfaces escalables y de alta performance.',
            url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/web-1',
            icon: <Code className="w-5 h-5 text-purple-400" />,
        },
        {
            title: 'Backend Developer',
            description: 'Diseño de microservicios, bases de datos y arquitecturas escalables de servidor.',
            url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659/dev-1',
            icon: <Database className="w-5 h-5 text-green-400" />,
        },
    ];

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Formación <span className="text-zinc-500 italic">Especializada</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Certificaciones avanzadas de APX que respaldan mi sólida base técnica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={cert.title}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="p-3 w-fit rounded-2xl bg-zinc-800/50 group-hover:scale-110 transition-transform">
                                    {cert.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 group-hover:text-blue-400 text-sm font-semibold transition-colors pt-2">
                                    <span>Ver certificado</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
