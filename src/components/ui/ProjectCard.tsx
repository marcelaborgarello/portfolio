'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export interface ProjectLink {
    label: string;
    url: string;
}

interface ProjectCardProps {
    title: string;
    label: string;
    icon: React.ReactNode;
    paragraphs: string[];
    tags: string[];
    links: ProjectLink[];
    className?: string;
}

/**
 * Tarjeta de proyecto secundaria: título, texto, etiquetas y enlaces.
 */
export const ProjectCard = ({ title, label, icon, paragraphs, tags, links, className = '' }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-[1px] rounded-3xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 ${className}`}
        >
            <div className="w-full h-full rounded-[23px] bg-zinc-900/90 p-8 flex flex-col justify-between gap-8">
                <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">{icon}</div>
                        <span className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 text-[10px] font-black uppercase tracking-wider">{label}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter">{title}</h3>
                    {paragraphs.map((text) => (
                        <p key={text} className="text-zinc-400 text-base leading-relaxed">{text}</p>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-zinc-800">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-white text-sm font-black hover:bg-zinc-700 transition-colors border border-zinc-700"
                        >
                            {link.label} <ExternalLink className="w-4 h-4" />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
