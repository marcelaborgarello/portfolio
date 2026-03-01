'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

/**
 * Componente Hero Principal.
 * Bio actualizada: Full Stack Developer.
 * Badge: "Potenciada por IA".
 */
export const Hero = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/marcelaborgarello',
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/marcela-borgarello/',
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: 'APX',
            url: 'https://apx.school/profiles/7abedec7-091e-46dd-81ec-47242cac2659',
            icon: <ExternalLink className="w-5 h-5" />,
        },
    ];

    const stack = ["JavaScript", "TypeScript", "Node.js", "Next.js", "React", "HTML5", "CSS3"];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
            {/* Fondo Ambient Layer */}
            <div className="absolute inset-0 -z-10 bg-[#0A0A0A]">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center gap-10 max-w-4xl"
            >
                {/* Badge IA-Driven */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md"
                >
                    <Sparkles className="w-3 h-3" />
                    <span>Potenciada por IA</span>
                </motion.div>

                {/* Logo con Gradiente */}
                <div className="p-1 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/20">
                    <div className="bg-[#0A0A0A] p-6 rounded-[22px] backdrop-blur-xl">
                        <Logo className="w-24 h-24" />
                    </div>
                </div>

                {/* Textos Bio */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
                        Full Stack <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Developer</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed">
                        Especialista en transformar ideas complejas en productos reales escalables
                        (como <span className="text-zinc-200">Ginialym</span>) mediante el uso estratégico de IA.
                    </p>
                </div>

                {/* Stack Highlights */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 transition-all text-zinc-100 font-semibold shadow-lg backdrop-blur-sm"
                        >
                            <motion.span
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2"
                            >
                                {link.icon}
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                    <Link
                        href="/cv-marcela-borgarello.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-blue-400 font-bold shadow-lg backdrop-blur-sm group"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2"
                        >
                            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                            Descargar CV
                        </motion.span>
                    </Link>
                    <motion.div
                        className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-500/90 font-semibold italic"
                    >
                        <Award className="w-5 h-5" />
                        Pull Shark
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
