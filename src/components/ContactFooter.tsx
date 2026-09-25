'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Check, Linkedin, Github, ExternalLink } from 'lucide-react';

/**
 * Pie de página con los datos de contacto.
 */
export const ContactFooter = () => {
    const [copied, setCopied] = useState(false);
    const email = 'imprenart@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="relative mt-20 border-t border-zinc-900 bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center gap-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Contacto</h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Si algo de lo que hago te interesa, escribime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    {/* Email: se copia al hacer clic */}
                    <motion.button
                        onClick={copyToClipboard}
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 group relative p-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 transition-all flex flex-col items-center gap-4 overflow-hidden"
                    >
                        <div className={`p-4 rounded-2xl bg-zinc-800 text-blue-400 transition-colors ${copied ? 'bg-green-500/20 text-green-400' : 'group-hover:bg-blue-500/10'}`}>
                            {copied ? <Check className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</p>
                            <p className="text-zinc-200 font-bold">{copied ? '¡Copiado!' : email}</p>
                        </div>
                    </motion.button>

                    <Link
                        href="https://www.linkedin.com/in/marcela-borgarello/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 transition-all flex flex-col items-center gap-4"
                    >
                        <div className="p-4 rounded-2xl bg-zinc-800 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <div className="space-y-1 text-center">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">LinkedIn</p>
                            <p className="text-zinc-200 font-bold flex items-center justify-center gap-1">marcela-borgarello <ExternalLink className="w-3 h-3 opacity-50" /></p>
                        </div>
                    </Link>

                    <Link
                        href="https://github.com/marcelaborgarello"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-purple-500/30 transition-all flex flex-col items-center gap-4"
                    >
                        <div className="p-4 rounded-2xl bg-zinc-800 text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                            <Github className="w-6 h-6" />
                        </div>
                        <div className="space-y-1 text-center">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">GitHub</p>
                            <p className="text-zinc-200 font-bold flex items-center justify-center gap-1">marcelaborgarello <ExternalLink className="w-3 h-3 opacity-50" /></p>
                        </div>
                    </Link>
                </div>

                <div className="w-full pt-12 border-t border-zinc-800/50 text-center text-zinc-500 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Marcela Borgarello · Río Cuarto, Córdoba</p>
                </div>
            </motion.div>
        </footer>
    );
};
