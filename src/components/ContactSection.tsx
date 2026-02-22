'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Linkedin, Github, Beer } from 'lucide-react';

/**
 * Componente de Contacto y Footer.
 * Refleja profesionalismo, facilidad de contacto y el espíritu de Río Cuarto.
 */
export const ContactSection = () => {
    const [copied, setCopied] = useState(false);
    const email = 'marcelaborgarello@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="mt-20 border-t border-zinc-900 bg-slate-950/50 backdrop-blur-xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center gap-16">

                {/* CTA Section */}
                <div className="text-center space-y-6 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none"
                    >
                        ¿Tenés un proyecto en mente? <br />
                        <span className="text-blue-500 italic">Hablemos.</span>
                    </motion.h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        Transformando ideas complejas en sistemas robustos y escalables.
                    </p>
                </div>

                {/* Email Card */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="w-full max-w-xl p-1 rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-500 shadow-2xl shadow-blue-500/10"
                >
                    <div className="bg-[#0A0A0A] rounded-[23px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-900 rounded-2xl text-blue-400 border border-zinc-800">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Profesional</p>
                                <p className="text-zinc-200 font-bold text-lg break-all">{email}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={copyToClipboard}
                                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all flex items-center justify-center"
                                title="Copiar al portapapeles"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                            <a
                                href={`mailto:${email}`}
                                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
                            >
                                Enviar <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-6">
                    {[
                        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/marcela-borgarello/' },
                        { name: 'GitHub', icon: <Github />, url: 'https://github.com/marcelaborgarello' }
                    ].map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.1 }}
                            className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="w-full pt-16 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Beer className="w-4 h-4 text-orange-500" />
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="hover:text-orange-400 transition-colors"
                        >
                            ¿Te gusta lo que ves? Invitame una birra (Río Cuarto style)
                        </a>
                    </div>
                    <p>© {new Date().getFullYear()} Marcela Borgarello. Hecho con Next.js 15 e IA.</p>
                </div>
            </div>
        </footer>
    );
};
